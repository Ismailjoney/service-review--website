import React from 'react';
import Banner from '../Banner/Banner';
import OurImageGallary from '../OurImageGallary/OurImageGallary';
import OurInformation from '../OurInformation/OurInformation';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurInformation></OurInformation>
            <OurService></OurService>
            <OurImageGallary></OurImageGallary>
        </div>
    );
};

export default Home;