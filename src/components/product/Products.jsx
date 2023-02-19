import React from 'react'
import { HomeSection, HomeTitle } from '../common/commonStyles'
import ProductCard from './ProductCard'
import { ProductContainer } from './productStyles'
import SkeletonProduct from './SkeletonProduct'

const Products = () => {
  return (
    <HomeSection color="transparent2-1">
        <HomeTitle>Recomendaciones</HomeTitle>
        <ProductContainer>
          <ProductCard img={'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg'} title='Prius' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
          <ProductCard img={'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg'} title='Prius' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
          
        </ProductContainer>
        <ProductContainer>
          <SkeletonProduct/>
          <SkeletonProduct/>
          
        </ProductContainer>
    </HomeSection>
  )
}

export default Products