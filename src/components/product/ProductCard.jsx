import React, { useState } from 'react'
import { color3, FilledButton, Heading1, Heading2, Heading3, Heading4, primaryColor, Strong } from '../common/commonStyles'
import { Card, Heart, ProductDescription, ProductHeader, ProductImage, ValContainer } from './productStyles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RatingStars from './RatingStars'



const ProductCard = ({img, title, desc}) => {

    const [rating, setRating] = useState(3.5);
    const [liked, setLiked] = useState(false);

    const ratingProps = {
        rating, setRating
    }
    return (
        <Card>
            <ProductImage src={img} alt="" />
            <Heart like={liked} onClick={() => setLiked(prev => !prev)}/>
            <ProductDescription>
                <ProductHeader>
                    <div>
                        <Heading3 color='#909090'>SEDAN <RatingStars {...ratingProps}/></Heading3>
                        <Heading1>{title}</Heading1>
                    </div>
                    <ValContainer>
                        <Heading3>{rating * 2}</Heading3>
                        <Heading3 color={color3}>Muy bueno</Heading3>
                    </ValContainer>
                </ProductHeader>
                <Heading4><FontAwesomeIcon icon="fa-solid fa-location-dot" /> A 940 m del centro - <Link style={{textDecoration: 'none', color: primaryColor}} >MOSTRAR EN EL MAPA</Link> </Heading4>
                <Heading4>{desc}</Heading4>
                <FilledButton>Ver más</FilledButton>
            </ProductDescription>
        </Card>
    )
}

export default ProductCard