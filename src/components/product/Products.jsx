import React from 'react'
import { HomeSection, HomeTitle } from '../common/commonStyles'
import ProductCard from './ProductCard'
import { ProductContainer } from './productStyles'
import SkeletonProduct from './SkeletonProduct'

const Products = ({ products }) => {
  return (
    <HomeSection>
        <HomeTitle>Recomendaciones</HomeTitle>
        <ProductContainer>

            { 
                products ? products.map(product => <ProductCard key={product.id} productData={product} />) 
                :
                <>
                    <SkeletonProduct/>
                    <SkeletonProduct/>
                </>
            }
        </ProductContainer>
    </HomeSection>
  )
}

export default Products