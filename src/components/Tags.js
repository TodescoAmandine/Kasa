import React from 'react';
import logements from '../logements.json';

const Tags = () => {
    const id ='0';
    const logement = logements.find(logement => logement.id===id);
    return (
        <>
            {logement.tags.map((tag, index) => (
                <div key={index} className='details__content--tag'>{tag}</div>
            ))}
        </>
    );
};

export default Tags;