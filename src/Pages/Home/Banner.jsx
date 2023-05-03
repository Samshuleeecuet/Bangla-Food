import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/k6sC3Hf/recepi-cover.jpg")`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} className='lg:px-64  px-8 flex'>
            <div className='flex-grow pt-16 lg:pt-32 '>
                <p className='lg:text-4xl font-bold text-2xl'>Welcome to you in BanglaFood</p>
                <p className='lg:text-3xl font-bold text-2xl'>Most Delicious Food in there </p>
                <p className='lg:text-xl font-semibold text-xl pt-5 '>Cooked by our famous Chef</p>
            </div>
            <div>
                <Player src='https://assets8.lottiefiles.com/packages/lf20_6o6RixO11s.json' className='player w-48 lg:w-72 lg:py-10' loop autoplay></Player>
                
            </div>
        </div>
    );
};

export default Banner;