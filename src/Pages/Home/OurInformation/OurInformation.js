import React from 'react';
import website from  '../../../assets/website.png'

const OurInformation = () => {
    return (
        <div>
            <h2 className='text-3xl   font-bold my-5 mt-20 text-white text-center'>Company Information</h2>
            <div className="flex justify-between">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 justify-center justify-items-center  items-center">
                    <div >
                        <img src={website} alt="" />
                    </div>
                    <div>
                    <p className='px-10'>
                        The bus service in Bangladesh is really a hot topic now! Cause day by day Bangladesh going to a better position in the traveling section. Even the bus company try to upgrade their service gradually. Here in this post, I will try to share the top 10 best bus services in Bangladesh.

                        <h2 className='text-1xl font-bold text-white-300 my-2'>Booking ticket by our app</h2>
                        you can booking your ticket our company app.at frist go to google play store and download our app create a account and booking your ticket to home.
                    </p> <br />
                     
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurInformation;