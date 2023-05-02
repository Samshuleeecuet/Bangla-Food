import React from 'react';
import EachRecepi from './EachRecepi';

const ChefRecepi = ({chefrecepies}) => {
    const {id,recipes,chef_name}= chefrecepies;
    //console.log(recipes)
    return (
        <div className='text-center py-10'>
            <p className='text-3xl font-extrabold'>{chef_name} famous recepies</p>
            <div className='grid px-5 pt-10 lg:grid-cols-3'>
                {
                    recipes.map((recipi,index)=> <EachRecepi key={index} recepi = {recipi}></EachRecepi>)
                }
            </div>
        </div>
    );
};

export default ChefRecepi;