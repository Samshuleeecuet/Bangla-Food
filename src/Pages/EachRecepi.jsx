import React from 'react';

const EachRecepi = ({recepi}) => {
    const {recipe_name,rating,cooking_method,ingredients}=recepi;
    console.log(ingredients)
    return (
        <>
            <div className="card w-96 h-auto glass">
                <div className="card-body text-left">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='font-semibold'>Cooking Method:</p>
                    <p><small>{cooking_method}</small></p>
                    <p className='font-semibold'>Ingredients:</p>
                    {
                        ingredients.map((ingredient,index)=>{
                            <p key={index}>{ingredient}</p>
                        })
                    }
                    <div className="card-actions justify-end">
                    <p>{rating}</p>
                    <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default EachRecepi;