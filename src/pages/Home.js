import React from "react";
import Navigation from "../components/Navigation";
import  Banner  from "../components/Banner";
import Footer from "../components/Footer";
import CardGrid from "../components/CardGrid";

const Home = () => {
  return (
    <div>
        <Navigation />
        < Banner imgbanner="./Image_source_1.png" title="Chez vous, partout ailleurs"/>
        < CardGrid/>
        < Footer />
    </div>
  );
};

export default Home;