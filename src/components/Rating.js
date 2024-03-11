import React from 'react';


function getStars(rating) {

    rating = parseInt(rating)

    let stars = ''

    for (let rate = 1; rate<=5; rate++) {
        if(rate <= rating) {
            stars += '<span class="fa-solid fa-star full"></span>'
        } else {
            stars += '<span class="fa-solid fa-star empty"></span>'
        }
    }

    return  <div dangerouslySetInnerHTML={{__html: stars}}/>

}

const Rating = ({rating}) => {
    return (
        <div>
            {getStars(rating)}
        </div>
    );
};

export default Rating;

