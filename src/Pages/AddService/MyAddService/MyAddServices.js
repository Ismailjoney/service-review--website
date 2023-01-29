import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { AuthorContext } from '../../../Context/AuthContext';
import Spinner from '../../../Utilities/Spinner';
import MyServicesRow from './MyServicesRow';

const MyAddServices = () => {
    const { user, loading,  logOut } = useContext(AuthorContext)
    const [services, setServices] = useState([])
 
  
    useEffect(() => {
        fetch( `https://service-review-website-server-jade.vercel.app/addservicess?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('service-review')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                //console.log( data);
                setServices(data)
            })
    }, [user?.email,logOut ])


    const handdleServiceDelete = id => {
        fetch(`https://service-review-website-server-jade.vercel.app/servicedelete/${id}`, {
            method: 'Delete',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const newServices = services.filter(service => service._id !== id);
                    setServices(newServices)
                    toast(`Your service delete successful`)
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-3xl bold mt-2 my-4'>Your Added Services: {services?.length} </h2>
            <div className='pm-20'>
                {
                   loading ? <Spinner></Spinner>
                   :
                        services?.map(service => <MyServicesRow
                            key={service._id}
                            service={service}
                            handdleServiceDelete={handdleServiceDelete}
                        ></MyServicesRow>)
                }
            </div>
        </div>
    );
};

export default MyAddServices;