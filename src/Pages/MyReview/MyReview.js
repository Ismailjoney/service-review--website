import React, { useContext, useEffect, useState } from 'react';
import { AuthorContext } from '../../Context/AuthContext';
import Spinner from '../../Utilities/Spinner';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const { user, loading, logout } = useContext(AuthorContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/commentss?email=${user?.email}`,{
            headers: {
                authoraization: `Bearer ${localStorage.getItem(`service-review`)}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logout()
                }
                return res.json()
            })
            .then(data =>  setReviews(data))
    }, [user?.email ])


    //delete review
    const handleDelete = id => {
        fetch(`http://localhost:5000/reviewdelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const myNewCommens = reviews.filter(rvw => rvw._id !== id)
                    setReviews(myNewCommens)
                }
            })
    }

    return (
        <div className="overflow-x-auto ">
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
                            reviews.map(review => <ReviewRow
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