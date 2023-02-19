import React from 'react'
import { HomeSection, HomeTitle } from '../common/commonStyles'
import ProductCard from './ProductCard'
import { ProductContainer } from './productStyles'

const Products = () => {
  return (
    <HomeSection color="transparent2-1">
        <HomeTitle>Recomendaciones</HomeTitle>
        <ProductContainer>
          <ProductCard img={'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg'} title='Prius' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ducimus quasi praesentium non tempore iusto nesciunt at sequi voluptatum, dicta, nisi fugiat quos atque earum libero vel iure quis!'/>
          <ProductCard img={'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg'} title='Prius' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ducimus quasi praesentium non tempore iusto nesciunt at sequi voluptatum, dicta, nisi fugiat quos atque earum libero vel iure quis!'/>
          
        </ProductContainer>
        <ProductContainer>
          <ProductCard img={'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg'} title='Prius' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ducimus quasi praesentium non tempore iusto nesciunt at sequi voluptatum, dicta, nisi fugiat quos atque earum libero vel iure quis!'/>
          <ProductCard img={'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Prius_2023_02_0.jpg'} title='Prius' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ducimus quasi praesentium non tempore iusto nesciunt at sequi voluptatum, dicta, nisi fugiat quos atque earum libero vel iure quis!'/>
          
        </ProductContainer>
    </HomeSection>
  )
}

export default Products