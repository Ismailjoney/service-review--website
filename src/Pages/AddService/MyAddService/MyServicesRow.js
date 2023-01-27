import React from 'react';

const MyServicesRow = ({ service, handdleServiceDelete }) => {
    const { description, imgurl, location, name, price, viewDetails, _id } = service;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img style={{width: `300px`, height: `180px`,display:'block'}} src={imgurl} alt="bus" /></figure>
            <div className="card-body">
                <div className="card card-side bg-base-100 shadow-xl">
                    
                    <div className="card-body">
                        <p>Customer Name: {name}</p>
                        <p>Service Requirment : {description}</p>
                        <p>Service Area: {location}</p>
                         
                       <div>
                       <button className='btn btn-sm   btn-primary mt-3  ' onClick={()=>handdleServiceDelete(_id)}>
                            Delete Service
                        </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServicesRow;