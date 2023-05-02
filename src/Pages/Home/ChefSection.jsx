import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachChef from './EachChef';

const ChefSection = () => {
    const chefData = useLoaderData();
   // console.log(chefData);
    return (
        <div className='pl-5 lg:pl-10 bg-[#EEEE] text-center'>
            <h2 className='lg:text-3xl text-xl font-extrabold py-5'>Famous Chef in Bangladesh</h2>
            <div className='grid lg:grid-cols-3 gap-8 text-left'>
            {
                chefData.map(chef=> <EachChef key={chef.id} chef={chef}></EachChef>)
            }
            </div>
        </div>
    );
};

export default ChefSection;