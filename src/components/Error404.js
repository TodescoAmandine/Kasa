import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1 className='title__error'>404</h1>
            <h3 className='h3__error'>Oups! La page que 
            <span className='break-on-mobile'>vous demandez n'existe pas.</span>
            </h3>
            <NavLink to="/">
             <p className='p__error'>Retourner sur la page d’accueil</p>
             </NavLink>
        </div>
    );
};

export default Error404;