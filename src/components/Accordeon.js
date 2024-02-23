import React, { useState } from 'react';
import aboutData from '../about.json';

function Accordeon() {
    //variable pour savoir si accordeon est actif ou pas
    const [activeIndex, setActiveIndex] = useState(null);
    //variable pour savoir si icon est ouvert ou pas
    const [isOpen, setIsOpen] = useState(false);

    //la variable hangleToggle va vérifier si l'index est actif ou non. Si il est actif alors il va le désactiver et vice versa
    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
   
        setIsOpen(!isOpen);
      };

    //la fonction map va parcourir le tableau aboutData 
    return aboutData.map((item, index) => (
        <div key={index} className={`accordeon ${activeIndex === index && "active"}`}>
            <div className='accordeon__title' onClick={() => handleToggle(index)}>{item.title}             
            <span className={`fa-solid fa-angle-up ${isOpen ? 'rotate' : ''}`} onClick={() => handleToggle(index)}>{item.icon}</span>
            </div>
            <div className='accordeon__content'>{item.content}</div>
        </div>
    ));
}




export default Accordeon;