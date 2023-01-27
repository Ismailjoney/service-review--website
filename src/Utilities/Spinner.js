import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center align-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Spinner;