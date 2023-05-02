import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import ChefRecepi from './ChefRecepi';
import { ToastContainer } from 'react-toastify';
const ChefRecepies = () => {
    const chefrecepies = useLoaderData();
    return (
        <div className='font-serif'>
            <ChefBanner chefrecepies={chefrecepies}></ChefBanner>
            <ChefRecepi chefrecepies={chefrecepies}></ChefRecepi>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ChefRecepies;