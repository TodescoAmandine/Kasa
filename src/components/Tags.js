import React from 'react';
//import logements from '../logements.json';

const Tags = ({ tags }) => (
    <div className='tags-row'>
      {tags.map((tag, index) => (
        <span key={index} className='details__content--tag'>{tag}</span>
      ))}
    </div>
);
export default Tags;