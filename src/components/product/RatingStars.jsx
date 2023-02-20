import React, { useState } from 'react'
import { Star } from './productStyles';

const RatingStars = ({ rating }) => {

    const stars = [];

    for(let i = 1; i <= 5; i++) {
        let percentage = 0;
        if (rating >= i) {
            percentage = 1;
        } else if (rating > (i - 1)) {
            percentage = rating % 1;
        }
        stars.push({percentage, i})
    }


    return (

        <span>
            {stars.map(star =><Star key={star.i} percentage={star.percentage} >★</Star>)}
        </span>
    )
}

export default RatingStars