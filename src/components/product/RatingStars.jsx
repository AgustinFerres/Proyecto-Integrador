import React, { useState } from 'react'
import { Star } from './productStyles';

const RatingStars = ({rating ,setRating}) => {


    return (
        <span>
            <Star filled={rating >= 1 ? 'full': ''} onClick={() => setRating(1)}>★</Star>
            <Star filled={rating === 1.5  ? 'half' : rating >= 2 ? 'full' : ''} onClick={() => setRating(2)}>★</Star>
            <Star filled={rating === 2.5  ? 'half' : rating >= 3 ? 'full' : ''} onClick={() => setRating(3)}>★</Star>
            <Star filled={rating === 3.5  ? 'half' : rating >= 4 ? 'full' : ''} onClick={() => setRating(4)}>★</Star>
            <Star filled={rating === 4.5  ? 'half' : rating === 5 ? 'full' : ''} onClick={() => setRating(5)}>★</Star>
        </span>
    )
}

export default RatingStars