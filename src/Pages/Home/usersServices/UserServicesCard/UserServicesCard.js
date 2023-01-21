import React from 'react';

const UserServicesCard = ({ service }) => {
    const { name, imgurl, price, location, description  } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img style={{ width: '330px', height: '210px' }} src={imgurl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>Location: {location}</p>
                 <p className='text-bold'>Customer FeedBacks :  {description}</p>  
            </div>
        </div>
    );
};

export default UserServicesCard;