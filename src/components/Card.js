import { NavLink } from 'react-router-dom';

const Card = ({ title, cover }) => {
    return (
        <div className='cards'>
            <div className='cards__shadow'>
        <NavLink to="/apartment" >    
            <h2>{title}</h2>
            <img className="cards" src={cover} alt="" />
        </NavLink>   
        </div>
    </div>
    )
}

export default Card;