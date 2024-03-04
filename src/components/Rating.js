import React from 'react';
import logements from '../logements.json';


const Rating = () => {
    const id ='0';
    const logement = logements.find(logement => logement.id===id);
    return (
<div>
    {logement.rating.map}((rating,index)=>())

    
<span className='fa-solid fa-star'></span>  
</div>
    );
};

export default Rating;

