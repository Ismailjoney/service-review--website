import React from 'react';
import notfounds from '../assets/notfounds.png'

const NotFound = () => {
    return (
        <div className='flex justify-center align-center mt-40 my-40  '>
            <img  src={notfounds} alt="not-found"  />
        </div>
    );
};

export default NotFound;