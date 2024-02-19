import { NavLink } from 'react-router-dom';

const Card = ({ title, cover }) => {
    return (
        <div className='contenaire__cards--1 cards'>
        <NavLink to="/apartment" >    
            <h2>{title}</h2>
            <img className="cards" src={cover} alt="" />
        </NavLink>   
    </div>
    )
}

export default Card;