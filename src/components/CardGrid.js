import { useEffect, useState } from 'react';
import Card from './Card';


const CardGrid = () => {
    const [data, setData]=useState([]);

    useEffect(() => {
        for (let i = 0; i < 20; i++) {
            fetch(`http://localhost:3008/${i}`)
                .then(response => response.json())
                .then(json => setData(prev => [...prev, json]));
        }
    }, []);

    return (
        <div id='contenaire__cards'>
            {data.map((item, index) => (
                index < 6
                ? <Card key={index} title={item.title} cover={item.cover} />
                : null
            ))}

    </div>
    )
};

export default CardGrid;