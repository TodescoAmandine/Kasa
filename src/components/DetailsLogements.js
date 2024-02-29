import React from 'react';
import logements from '../logements.json';
import Accordeon from './Accordeon'; 
import { useParams } from 'react-router-dom';
import '../styles/components/_accordeon.scss';
import '../styles/pages/_settings.scss';


const DetailsLogements = () => {
    const id ='1';
    const logement = logements.find(logement => logement.id===id);

    return (
        <div>
            <Accordeon title={logement.title} content={logement.description} index={0} key={0}/>
        </div>
    );
};

export default DetailsLogements;