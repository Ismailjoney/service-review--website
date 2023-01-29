import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthorContext } from '../../Context/AuthContext';
import Spinner from '../../Utilities/Spinner';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const { user, loading, logOut } = useContext(AuthorContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://service-review-website-server-jade.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-review')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logOut])


    //delete review
    const handleDelete = id => {
        fetch(`https://service-review-website-server-jade.vercel.app/reviewdelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const myNewCommens = reviews.filter(rvw => rvw._id !== id)
                    setReviews(myNewCommens)
                    toast(`review delete sucessfull`)
                }
            })
    }

    return (
        <div className="overflow-x-auto ">
            <h2 className='text-3xl mt-3 my-3'>Your Total Review : {reviews?.length}</h2>
            <table className="table w-full mt-4">
                <thead >
                    <tr>
                        <th>Delete</th>
                        <th>Email </th>
                        <th>Date And Time </th>
                        <th>Your Message </th>
                    </tr>
                </thead>
                <tbody  >
                    {
                        loading ? <Spinner></Spinner>
                            :
                            reviews?.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyReview;