import React, { useState } from 'react';
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';

const EachRecepi = ({recepi}) => {
    const {recipe_name,rating,cooking_method,ingredients}=recepi;
    const [disable,setDisable] = useState(false)
    const handleDisable =()=>{
        setDisable(true);
    }
    //console.log(ingredients)
    return (
        <>
            <div className="card w-96 h-auto glass">
                <div className="card-body text-left">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='font-semibold'>Cooking Method:</p>
                    <p><small>{cooking_method}</small></p>
                    <p className='font-semibold'>Ingredients:</p>
                    <p>1. {ingredients[0]}</p>
                    <p>2. {ingredients[1]}</p>
                    <p>3. {ingredients[2]}</p>
                    <p>4. {ingredients[3]}</p>
                    <p>5. {ingredients[4]}</p>
                    <div className="card-actions pt-5 flex">
                    <div className='flex flex-grow'>
                    <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                    />
                    <span> {rating}</span>

                    </div>
                       
                    <button onClick={handleDisable} disabled={disable} className="btn btn-primary">Favourite</button>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default EachRecepi;