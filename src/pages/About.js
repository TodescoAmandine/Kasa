import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Accordeon from '../components/Accordeon';
import Footer from '../components/Footer';



const About = () => {
    return (
        <div>
        <Navigation />
        < Banner imgbanner="./kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"/>
        <div id='accordeon__container'> 
        <Accordeon title="Titre 1" icon={<i className="fa-solid fa-angle-up"></i>} content="Contenu 1" />
        </div> 
        < Footer />
    </div>

    );
};

export default About;