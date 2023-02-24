import React from 'react';
import {   ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import './toproute.css'
const TopBusRoutes = () => {
    return (
        <div className='bg-emerald-700 text-white pt-10 py-20 mt-20'>
            <h2 className="text-3xl text-center font-bold mt-8 my-8">TOP BUS ROUTES</h2>
            <div id="topRoute" className='grid grid-cols-1 sm:gap-2  justify-items-start ml-3  lg:grid-cols-3 lg:justify-items-center gap-2'>
                <div>
                    <p><ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />
                        Dhaka - Sayestagong - Syhlet</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Dhaka-Rajshahi-Chapai</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />NS-Dinajpur - Ghoraghat - Dhaka</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />NS-Dhaka -Joypurhat -Vandarpur - Hili</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />NS-Dhaka -Joypurhat -Vandarpur - Hili</p>

                </div>
                <div>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Dhaka - Sreemangal - Moulvibazar</p>
                    <p><ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Sylhet - Narsingdi - Bhairab - Dhaka</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Chapai-Rajshahi-Dhaka</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />NS-Gaibandha - Gobindaganj - Bogra - Dhaka</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />704-Bheramara-Kushtia-Jhenaidah</p>
                </div>
                <div>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Dhaka -Jessore - Noapara - Khulna</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Khulna - Noapara - Jessore - Dhaka</p>
                    <p> <ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />NS-Hili - Panchbibi - Joypurhat - Bogra - Dhaka</p>
                    <p><ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Jhenaidah - Kushtia-Bheramara-Dhaka</p>
                    <p><ArrowRightCircleIcon className='h-6 w-6 inline mr-1' />Moulvibazar - Sreemangal - Habiganj - Bhairab - Dhaka</p>
                </div>
            </div>
        </div>
    );
};

export default TopBusRoutes;