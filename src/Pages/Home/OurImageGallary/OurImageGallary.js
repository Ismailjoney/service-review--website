import React from 'react';
import collectioneight from '../../../assets/collectioneight.jpg'
import collectionone from '../../../assets/collectionone.jpg'
import two from '../../../assets/two.jpg'
import collectionthree from '../../../assets/collectionthree.jpg'
import collectionfour from '../../../assets/collectionfour.jpg'
import collectionsix from '../../../assets/collectionsix.jpg'
import collectionseven from '../../../assets/collectionseven.jpg'
import collectionten from '../../../assets/collectionten.jpg'
import nine from '../../../assets/nine.jpg'
 
import './imageGallary.css'


const OurImageGallary = () => {
    return (
        <div className='mt-20 my-20'>
            <h2 className='text-3xl text-center my-14'>Our Image Gallary</h2>
            <div id="gallary" className="grid grid-cols-4 gap-4 ">
                <div className=''>
                    <img src={collectioneight} alt="bus" />
                </div>
                <div className=''>
                    <img src={collectionone} alt="bus" />
                </div>
                <div className=''>
                    <img src={two} alt="bus" />
                </div>
                <div className=''>
                    <img src={collectionthree} alt="bus" />
                </div>
                <div className=''>
                    <img src={collectionfour} alt="bus" />
                </div>
                <div className=''>
                    <img src={collectionsix} alt="bus" />
                </div>
                <div className=''>
                    <img src={collectionseven} alt="bus" />
                </div>
                <div className=''>
                    <img src={nine} alt="bus" />
                </div>
                <div className=''>
                    <img src={collectionten} alt="bus" />
                </div>
            </div>
        </div>
    );
};

export default OurImageGallary;