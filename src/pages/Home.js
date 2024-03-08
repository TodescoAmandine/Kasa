import React from "react";
import Navigation from "../components/Navigation";
import  Banner  from "../components/Banner";
import Footer from "../components/Footer";
import CardGrid from "../components/CardGrid";
import imgbanner from '../assets/img/Image_source_1.png'

const Home = () => {
  return (
    <div>
        <Navigation />
        < Banner imgbanner={"../assets/img/Image_source_1.png"} title={ <span>Chez vous,<span className="break-on-mobile" > partout ailleurs</span> </span>}/>
        < CardGrid/>
        < Footer />


    </div>
  );
};

export default Home;
