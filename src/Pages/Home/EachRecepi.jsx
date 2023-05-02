import React, { useState } from 'react';
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EachRecepi = ({recepi}) => {
    const {recipe_name,rating,cooking_method,ingredients}=recepi;
    const [disable,setDisable] = useState(false)
    const handleDisable =()=>{
        setDisable(true);
        toast("The recipe is your favorite");
    }
    //console.log(ingredients)
    return (
        <>
            <div className="card w-96 h-auto glass shadow-2xl">
                <div className="card-body text-left">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='font-semibold'>Cooking Method:</p>
                    <p><small>{cooking_method}</small></p>
                    <p className='font-semibold'>Ingredients:</p>
                    {
                        ingredients.map((ingredient,index)=>{
                            return <p key={index}>{index+1} . {ingredient}</p>
                        })
                    }
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