import React, { useState } from 'react';
import left from '../assets/img/arrow_left.png';
import right from '../assets/img/arrow_right.png'
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = currentImageIndex + 1;
    setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex - 1;
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  return (
    <div id='slide' >
      <img className='arrow arrow_left' src={left} alt='arrow-left' onClick={prevImage} />
      <img className='slide_img' src={images[currentImageIndex]} alt="" />
      <img className='arrow arrow_right' src={right} alt='arrow-left' onClick={nextImage} />
    </div>
  );
};

export default Carousel;
