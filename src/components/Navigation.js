import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/img/LOGO.png'

const Navigation = () => {
    return (
        <div className='navigation'>
            <img src={Logo} alt="logo kasa"/>
            <ul>
                <li>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Accueil
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        A propos
                    </NavLink>
                </li>


            </ul>

        </div>
    );
};

export default Navigation;
