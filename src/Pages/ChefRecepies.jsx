import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import ChefRecepi from './ChefRecepi';

const ChefRecepies = () => {
    const chefrecepies = useLoaderData();
    return (
        <div>
            <ChefBanner chefrecepies={chefrecepies}></ChefBanner>
            <ChefRecepi chefrecepies={chefrecepies}></ChefRecepi>
        </div>
    );
};

export default ChefRecepies;