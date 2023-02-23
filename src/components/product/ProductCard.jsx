import React, { useReducer } from 'react'
import { color3, FilledButton, Heading2, Heading3, primaryColor, Text1 } from '../common/commonStyles'
import { DoubleCard, HeartButton, ImageContainer, ProductDescription, ProductDescriptionBottom, ProductDescriptionText, ProductHeader, ProductImage, RightHeader, ScoreContainer } from './productStyles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RatingStars from './RatingStars'
import { normalizeDescription } from '../../utils/normalizations'



const ProductCard = ({ productData }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "like":
                return {
                    ...state,
                    liked: !state.liked
                }
        }
    }

    const [product, dispatch] = useReducer(reducer, productData);

    const ratingText = (score) => {
        if (score < 1.5) {
            return "Malo"
        } else if (score < 2.5) {
            return "Regular"
        } else if (score < 3.5) {
            return "Bueno"
        } else if(score < 4.5) {
            return "Muy bueno"
        } else {
            return "Espectacular"
        }
    }

    const placeholderUrl = 'https://www.google.com.uy/maps/place/Car+One/@-34.8175116,-55.9838102,17z/data=!4m6!3m5!1s0x959f89bfe70e3fbd:0xc9676c9842bc07a9!8m2!3d-34.817494!4d-55.9815893!16s%2Fg%2F11hcjw1bh6';

    const openWindow = (url, title, w, h) => {

        const left = (window.innerWidth/2)-(w/2);
        const top = (window.innerHeight/2)-(h/2);
        window.open(url, 
        title, 
        `width=${w},height=${h}, top=${top}, left=${left}`); 
        
        return false;
    }

    return (
        <DoubleCard>
            <ImageContainer>
                <ProductImage src={ product.img } alt={ product.alt } />
                <HeartButton like={ product.liked } onClick={() => {dispatch({type: "like"})}}><FontAwesomeIcon fontSize={'32px'} icon="fa-solid fa-heart" /></HeartButton>
            </ImageContainer>
            <ProductDescription>
                <div>
                    <ProductHeader>
                        <div>
                            <Heading3 margin={'0 0 5px 0'} color='#909090'>{ product.category } <RatingStars rating={product.rating}/></Heading3>
                            <Heading2>{ product.title }</Heading2>
                        </div>
                        <RightHeader>
                            <ScoreContainer>{ product.rating * 2}</ScoreContainer>
                            <Heading3 color={color3}>{ratingText(product.rating)}</Heading3>
                        </RightHeader>
                    </ProductHeader>
                    <Text1><FontAwesomeIcon icon="fa-solid fa-location-dot" /> A 940 m del centro - <Link onClick={() => openWindow(placeholderUrl, product.title, 800, 600)} style={{textDecoration: 'none', color: primaryColor}} >MOSTRAR EN EL MAPA</Link> </Text1>
                </div>
                <ProductDescriptionBottom>
                    <ProductDescriptionText>{ normalizeDescription(product.description, 100) }</ProductDescriptionText>
                    <FilledButton>Ver más</FilledButton>
                </ProductDescriptionBottom>
            </ProductDescription>
        </DoubleCard>
    )
}

export default ProductCard