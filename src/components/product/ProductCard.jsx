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

    return (
        <DoubleCard>
            <ImageContainer>
                <ProductImage src={ product.img } alt={ product.alt } />
                {/* <Heart like={ product.liked } onClick={() => {dispatch({type: "like"})}}/> */}
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
                            <Heading3 color={color3}>Muy bueno</Heading3>
                        </RightHeader>
                    </ProductHeader>
                    <Text1><FontAwesomeIcon icon="fa-solid fa-location-dot" /> A 940 m del centro - <Link style={{textDecoration: 'none', color: primaryColor}} >MOSTRAR EN EL MAPA</Link> </Text1>
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