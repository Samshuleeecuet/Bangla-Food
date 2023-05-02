import React from 'react';

const ChefBanner = ({chefrecepies}) => {
    //console.log(chefrecepies);
    const {id,chef_picture,chef_name,years_of_experience,likes,number_of_recipes,description,recipes}= chefrecepies;
    return (
        <div className='px-4 py-16 flex' style={{backgroundImage: `url("https://i.ibb.co/k6sC3Hf/recepi-cover.jpg")`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div className='lg:pl-32 lg:pr-5 flex-grow'>
                <p className='font-extrabold text-xl lg:text-3xl'>{chef_name}</p>
                <p>{description}</p>
                <p className=' lg:pt-4 text-lg'>Experience: {years_of_experience} year</p>
                <p className='lg:pt-2 text-lg'>Likes: {likes}</p>
                <p className='lg:pt-2 text-lg'>Total recepies: {number_of_recipes}</p>
                
            </div>
            <img className='rounded-3xl w-2/4' src={chef_picture}></img>
        </div>
    );
};

export default ChefBanner;