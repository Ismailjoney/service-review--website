import React from 'react';

const Comments = ({comment }) => {
    const{cmntmsg,date} = comment;
     
    return (
        <div>
            <p>{cmntmsg} <br /><span>{date}</span></p><br />
        </div>
    );
};

export default Comments;