import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";



const Error = () => {
    return (
        <div>
        <Navigation />
        <Error404 />
        {/* <div>
            <h1 className='title__error'>404</h1>
            <h3 className='h3__error'>Oups! La page que <span className='break-on-mobile'>vous demandez n'existe pas.</span></h3>
            <NavLink to="/">
                        <p className='p__error'>Retourner sur la page d’accueil</p>
                    </NavLink>
        </div> */}
        < Footer />              
        </div>
    );
};

export default Error;