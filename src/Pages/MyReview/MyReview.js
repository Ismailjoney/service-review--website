import React, { useContext, useEffect, useState } from 'react';
import { AuthorContext } from '../../Context/AuthContext';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthorContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        // const agree = window.confirm("Are you agree to delete reviews");
        // if (agree) {
            fetch(`http://localhost:5000/reviewdelete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
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