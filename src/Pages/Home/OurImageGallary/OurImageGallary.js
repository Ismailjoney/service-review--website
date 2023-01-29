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

    const image = [collectioneight, collectionone, two, collectionthree, collectionfour, collectionsix, collectionseven, collectionten, nine]

    return (
        <div>
            <h2 className='text-3xl text-center my-14 mt-20'>Our Image Gallary</h2>

            <div id="gallary" className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center align-middle">
            {
                image.map(img => <PhotoProvider>
                    <div>
                        <PhotoView src={collectioneight} className="hover:border-spacing-14">
                            <img src={img} alt="bus" />
                        </PhotoView>
                    </div >
                </PhotoProvider >)
            }
            </div >
        </div >
    );
};

export default OurImageGallary;