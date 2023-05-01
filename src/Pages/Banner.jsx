import React from 'react';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/51Zfc2N/cover.jpg")`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} className='text-white lg:px-64  px-11 py-20 flex'>
            <div className='flex-grow lg:pt-10'>
                <p className='lg:text-4xl text-3xl'>Delicious Food In Bangladesh</p>
                <p className='lg:text-2xl text-xl pt-5 '>Cooked By Famous Chef</p>
            </div>
            <div>
                <img src="https://i.ibb.co/KsyTsDt/food1.png" className='w-28 lg:w-56 ' alt="" />
            </div>
        </div>
    );
};

export default Banner;<p>Fruit i</p>