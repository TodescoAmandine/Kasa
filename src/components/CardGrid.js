//import { useEffect, useState } from 'react';
import Card from './Card';
import logements from '../logements_sauv.json';

const CardGrid = () => {
    return (
        <div id='contenaire__cards'>
            {logements.map((logement, index) => (
                index
                ? <Card key={index} id={logement.id} title={logement.title} cover={logement.cover} />
                : null
            ))}
        </div>
    );
};

export default CardGrid;
