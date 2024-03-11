import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Accordeon from '../components/Accordeon';
import Footer from '../components/Footer';
import aboutData from '../about.json';
import BannerImage from "../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"



const About = () => {
    return (
        <div>
        <Navigation />
        < Banner imgbanner={BannerImage}/>
        <div id='accordeon__container'>
            {aboutData.map((item, index) => (
                <Accordeon title={item.title} content={item.content} index={index} key={index}/>
            ))}
        </div>
        < Footer />
    </div>

    );
};

export default About;
