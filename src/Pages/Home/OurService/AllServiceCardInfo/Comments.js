import React from 'react';

const Comments = ({comment,key}) => {
    const{cmntmsg} = comment;
    return (
        <div>
            <p>{cmntmsg}</p>
        </div>
    );
};

export default Comments;