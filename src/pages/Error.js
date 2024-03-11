import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";



const Error = () => {
    return (
        <div>
        <Navigation />
        <Error404 />
        < Footer />              
        </div>
    );
};

export default Error;