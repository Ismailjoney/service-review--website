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
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const OurImageGallary = () => {

    // const image = [collectioneight,collectionone,two,collectionthree,collectionfour,collectionsix,collectionseven,collectionten,nine]
    return (
        <div>
            <h2 className='text-3xl text-center my-14'>Our Image Gallary</h2>
            <PhotoProvider> 
                <div id="gallary" className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center align-middle">
                    <div className=''>
                        <PhotoView src={collectioneight} className="hover:border-spacing-14">
                            <img src={collectioneight} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={collectionone}>
                            <img src={collectionone} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={two} >
                            <img src={two} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={collectionthree}>
                            <img src={collectionthree} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={collectionfour}>
                            <img src={collectionfour} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={collectionsix}>
                            <img src={collectionsix} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={collectionseven}>
                            <img src={collectionseven} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={nine}>
                            <img src={nine} alt="bus" />
                        </PhotoView>
                    </div>
                    <div className=''>
                        <PhotoView src={collectionten}>
                            <img src={collectionten} alt="bus" />
                        </PhotoView>
                    </div>
                </div>
            </PhotoProvider>
        </div>


    );
};

export default OurImageGallary;