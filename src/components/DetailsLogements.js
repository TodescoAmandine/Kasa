import React from 'react';
import Accordeon from './Accordeon';
import Rating from './Rating';
import Carousel from '../components/Carousel';
import Tags from './Tags';


const DetailsLogements = ({logement}) => {

    return (
        <div className='details__container'>
            <Carousel images={logement.pictures}/>
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
                        <img className='details__host--image' src={logement.host.picture} alt=""/>
                        <div className='details__host--rating'>
                            <Rating rating={logement.rating}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='details__host--accordeon' id="accordeon__container">
                <Accordeon title="Description" content={logement.description}/>
                <Accordeon title="Equipement" content={logement.equipments.map((equipment, id) => {
                    return (<span key={id}>{equipment}</span>)
                })}/>
            </div>
        </div>
    );
};

export default DetailsLogements;
