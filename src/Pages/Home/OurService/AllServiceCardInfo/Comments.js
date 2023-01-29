import React from 'react';

const Comments = ({comment }) => {
    const{cmntmsg,date,email} = comment;
     
    return (
        <div className='mt-0'>
            <p>{cmntmsg} <br /><span>{date}</span> <br /><span>{email}</span></p><br />
        </div>
    );
};

export default Comments;