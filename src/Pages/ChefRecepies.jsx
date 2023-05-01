import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecepies = () => {
    const chefrecepies = useLoaderData();
    console.log(chefrecepies);
    return (
        <div>
            <h2>ChefRecepies</h2>
        </div>
    );
};

export default ChefRecepies;