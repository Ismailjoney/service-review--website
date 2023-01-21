import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllServiceCard = ({data}) => {
    
    const { name, img, location, description, _id } = data;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{width:'330px', height:'210px'}} src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Info:{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                
                <div className="card-actions">
                    <button className="btn btn-primary">
                        <Link to={`/allservicecardinfo/${_id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowAllServiceCard;