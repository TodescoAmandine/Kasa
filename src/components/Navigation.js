import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
                <img src="./LOGO.png" alt="logo kasa" />
            <ul>              
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A propos</li>
                    </NavLink>
            </ul>
            {/* <ul>                             
                <li>Accueil</li>
                <li>A propos</li>                   
            </ul> */}
        </div>
    );
};

export default Navigation;