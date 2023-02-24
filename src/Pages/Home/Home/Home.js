import React from 'react';
import Banner from '../Banner/Banner';
import OurImageGallary from '../OurImageGallary/OurImageGallary';
import OurInformation from '../OurInformation/OurInformation';
import OurService from '../OurService/OurService';
import TopBusRoutes from '../topBusRoutes/TopBusRoutes';
import UsersServices from '../usersServices/UsersServices';
 

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <OurInformation></OurInformation>
            <OurService></OurService>
            <OurImageGallary></OurImageGallary>
            <TopBusRoutes></TopBusRoutes>
            <UsersServices></UsersServices>
        </div>
    );
};

export default Home;