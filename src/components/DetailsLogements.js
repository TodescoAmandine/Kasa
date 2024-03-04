import React from 'react';
import logements from '../logements.json';
import Accordeon from './Accordeon';
import { useParams } from 'react-router-dom';
import '../styles/components/_accordeon.scss';
import '../styles/pages/_settings.scss'
import Rating from './Rating';
import Carousel from '../components/Carousel';
import Tags from './Tags';


const DetailsLogements = () => {
    const id ='0';
    const logement = logements.find(logement => logement.id===id);

    return (
        <div className='details__container'>
            <Carousel images={logement.pictures} />
            <div className='details__content'>
                <div className='details__content--infos'>
                    <h1 className='details__content--title'>{logement.title}</h1>
                    <p className='details__content--location'>{logement.location}</p>
                    <div className='details__content--tags'><Tags/></div>
                    {/* <div className='details__content--tag'>{logement.tags}</div> */}

                </div>
                <div className='details__host'>
                    <div className='details__host--info'>
                        <p className='details__host--name'>{logement.host.name}</p>
                        <img className='details__host--image' src={logement.host.picture} alt="" />
                        <div className='details__host--rating'>
                            <Rating/>
                        </div>
                    </div>
                </div>
            </div>
                    <div className='details__host--accordeon'>
                        <Accordeon title="Description" content={logement.description} />
                        <Accordeon title="Equipement" content={logement.equipments} />
                     </div>
        </div>
    );
};

export default DetailsLogements;