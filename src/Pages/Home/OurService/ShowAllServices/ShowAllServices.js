import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllServiceCard from './ShowAllServiceCard';

const ShowAllServices = () => {
    const datas = useLoaderData([])
     
    return (
        <div className='mt-8 my-28'>
            <h2 className='text-center text-3xl'>OUR SERVICE </h2>
             <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
                {
                    datas.map(data => <ShowAllServiceCard
                    id={data._id}
                    data={data}
                    ></ShowAllServiceCard>)
                }
             </div>
        </div>
    );
};

export default ShowAllServices;