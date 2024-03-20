import React from 'react';
//import imgbanner from '../assets/img/Image_source_1.png'

const Banner = ({title, imgbanner}) => {
    return (
        <div id='banner'>
            <div className='banner__black'>
               <img src={imgbanner} id="imgbanner" alt="paysage" />
                <p id='tag'>{title}</p>
            </div>
        </div>
    );
};

export default Banner;
