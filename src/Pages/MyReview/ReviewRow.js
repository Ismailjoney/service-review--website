import React, { useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, cmntmsg, date, email, } = review;
    console.log(review);

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>Delete Now</button>
                </label>
            </th>
            <td>
                <div className="flex   space-x-3">
                    <div>
                        <div className="font-bold">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{cmntmsg}</div>
            </td>
            <td>
                <div className="font-bold">{date}</div>
            </td>
        </tr>

    );
};

export default ReviewRow;