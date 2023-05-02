import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const LatestRecepi = () => {
    return (
        <div className='bg-[#EEEE] lg:pl-10 pt-20 pb-10 lg:flex'>
            <div className='lg:pt-20'>
            <p className='text-center text-xl lg:text-3xl lg:w-72 font-bold my-auto'>Latest Recipes from Famous Chef</p>
            <Player src='https://assets8.lottiefiles.com/packages/lf20_h3b950fy.json' className='player w-56' loop autoplay></Player>
            </div>

            <div className="carousel mx-auto pt-10 w-5/6 lg:w-3/6 h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/g6scKFH/carosel1.jpg" className="w-full rounded-2xl glass shadow-3xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/4WNTngP/carosel2.jpg" className="w-full rounded-2xl glass shadow-3xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/dMQ5X5w/carosel3.jpg" className="w-full rounded-2xl glass shadow-3xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/R29k0MZ/carosel4.jpg" className="w-full rounded-2xl glass shadow-3xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LatestRecepi;