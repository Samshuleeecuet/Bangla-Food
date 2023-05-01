import React from 'react';
import { Link } from 'react-router-dom';

const EachChef = ({chef}) => {
    console.log(chef);
    const {id,chef_picture,chef_name,years_of_experience,likes,number_of_recipes}= chef;
    return (
        <div className="card w-96 glass">
        <figure><img src={chef_picture} alt="car!"/></figure>
        <div className="card-body">
            <h2 className="card-title">{chef_name}</h2>
            <p>Experience: {years_of_experience}</p>
            <p>Number of Recipes: {number_of_recipes}</p>
            <p>Likes: {likes}</p>
            <div className="card-actions justify-end">
            <Link><button className="btn btn-primary">View Recepies</button></Link>
            </div>
        </div>
        </div>
    );
};

export default EachChef;