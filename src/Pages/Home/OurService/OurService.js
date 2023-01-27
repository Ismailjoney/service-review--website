import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../../../Context/AuthContext';
import Spinner from '../../../Utilities/Spinner';
import ServiceDetails from './ServiceDetails';

const OurService = () => {
    const [services, setServices] = useState([])
    const {loading} = useContext(AuthorContext)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-20 my-23'>
            <h2 className='text-center text-3xl'>OUR SERVICE </h2>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                {
                   
                    loading ?  <Spinner></Spinner>
                    :
                    services.map(service => <ServiceDetails
                        key={service._id}
                        service={service}
                    ></ServiceDetails>)
                    
                    
                }
            </div>
            <div className='flex justify-center mt-8'>
                <button className="btn btn-primary">
                    <Link to='/showallservices'>See All</Link>
                </button>
            </div>
        </div>
    );
};

export default OurService;