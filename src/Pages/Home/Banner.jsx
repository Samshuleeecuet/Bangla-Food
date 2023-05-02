import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/k6sC3Hf/recepi-cover.jpg")`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} className='lg:px-64  px-11 flex'>
            <div className='flex-grow lg:pt-32 '>
                <p className='lg:text-4xl font-bold text-3xl'>Delicious Food In Bangladesh</p>
                <p className='lg:text-2xl font-semibold text-xl pt-5 '>Cooked By Famous Chef</p>
            </div>
            <div>
                <Player src='https://assets8.lottiefiles.com/packages/lf20_6o6RixO11s.json' className='player w-72 lg:py-10' loop autoplay></Player>
                
            </div>
        </div>
    );
};

export default Banner;