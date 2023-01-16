import React, { useContext, useEffect, useState } from 'react';
import { AuthorContext } from '../../Context/AuthContext';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthorContext)
    const[reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div className="overflow-x-auto ">
            <table className="table w-full mt-4 my-40">
                <thead>
                    <tr>
                         
                        <th>Email </th>
                        <th>Date And Time </th>
                        <th>Your Message </th>
                    </tr>
                </thead>
                <tbody>
                     {
                        reviews.map(review => <ReviewRow
                        id={review._id}
                        review={review}
                        ></ReviewRow>)
                    } 
                </tbody>
            </table>
        </div>
    );
};

export default MyReview;