import React from 'react';

const Banner = ({title, imgbanner}) => {
    return (
        <>
        <div id='banner'>
            <div className='banner__black'>
               <img src={imgbanner} id="imgbanner" alt="" />
                <p id='tag'>{title}</p>
            </div>
        </div>
        </>
    );
};

export default Banner;