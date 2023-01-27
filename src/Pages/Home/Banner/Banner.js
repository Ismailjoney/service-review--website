import React from 'react';
import busone from '../../../assets/busone.webp'
import bustwoo from '../../../assets/bustwoo.webp'
import bussthreee from '../../../assets/bussthreee.webp'
import './Banner.css'
 

const Banner = () => {

  return (
        <div id="main" className="carousel w-full my-0">
            <div id="slide1" className="carousel-item relative w-full">
                <img  src={busone} className="w-full h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bustwoo} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bussthreee} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;