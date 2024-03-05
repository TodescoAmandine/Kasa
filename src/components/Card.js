import {NavLink} from 'react-router-dom';

const Card = ({title, cover, id}) => {
    return (
        <div className='cards'>
            <div className='cards__shadow'>
                <NavLink id='cards__a' to={`/logement/${id}`}>
                    <h2>{title}</h2>
                    <img className="cards" src={cover} alt=""/>
                </NavLink>
            </div>
        </div>
    )
}

export default Card;
