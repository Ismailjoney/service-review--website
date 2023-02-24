import React from 'react';
import updatecover from '../../../assets/updatecover.jpg'
import './banner.css'


const Banner = () => {
    return (
        <div style={{background: `url(${updatecover})`, backgroundSize: 'cover'}} className="hero min-h-screen bg-base-200">
            <div className="hero-content justify-start text-center">
                <div className="max-w-md ">
                    <h1 className="text-5xl font-bold text-white ">WellCome To Our Website</h1>
                    <p className="py-6 text-orange-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>


    );
};

export default Banner;