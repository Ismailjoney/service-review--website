import React, { useContext, useEffect, useState } from 'react';
import { AuthorContext } from '../../../Context/AuthContext';
import Spinner from '../../../Utilities/Spinner';
import UserServicesCard from './UserServicesCard/UserServicesCard';

const UsersServices = () => {
    const [services, setServices] = useState([])
    const {loading} = useContext(AuthorContext)

    useEffect(() => {
        fetch('http://localhost:5000/addservices')
        .then(res => res.json())
        .then(data => setServices(data))
},[])

    return (
        <div className='mt-20'>
            <h2 className='text-3xl text-center'>Travelars Posts</h2>
            <h3 className='text-2xl text-center  '>They Needs This service</h3>
            <div className='mt-10 my-30 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    loading ? <Spinner></Spinner>
                    :
                    services.map(service => <UserServicesCard
                    key={service._id}
                    service={service}
                    ></UserServicesCard>)
                }
            </div>
        </div>
    );
};

export default UsersServices;