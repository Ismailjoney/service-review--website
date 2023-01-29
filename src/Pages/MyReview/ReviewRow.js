import React from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, cmntmsg, date, email } = review;
     

    return (
        <tr>
            <td>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>Delete Now</button>
                </label>
            </td>
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