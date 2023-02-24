import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../../../Context/AuthContext';
import Spinner from '../../../Utilities/Spinner';
import ServiceDetails from './ServiceDetails';

const OurService = () => {
    const [services, setServices] = useState([])
    const {loading} = useContext(AuthorContext)

    useEffect(() => {
        fetch('https://service-review-website-server-jade.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-20 my-23'>
            <h2 className='text-center text-3xl font-bold text-white'>OUR SERVICE </h2>
            <div className='grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-3 md:grid-cols-2  '>
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