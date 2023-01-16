import React from 'react';

const ReviewRow = ({ review }) => {
    const { cmntmsg, date, email } = review;
    return (
        <tr>
            <td>{email}</td>
            <td>{date}</td>
            <td>{cmntmsg}</td>
        </tr>

    );
};

export default ReviewRow;