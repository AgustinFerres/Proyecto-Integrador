import React from 'react'
import { CategoriesContainer } from './categoriesStyles'
import { Heading2, HomeSection, HomeTitle } from '../common/commonStyles'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <HomeSection>
      <HomeTitle>Buscar por marca</HomeTitle>
      <CategoriesContainer>
        <CategoryCard img={'https://toyotaassets.scene7.com/is/image/toyota/Prius_68x538_TYCK2067000H?fmt=jpeg&fit=crop&wid=767'} title={'Toyota'} desc='10.734 autos'/>
        <CategoryCard img={'https://toyotaassets.scene7.com/is/image/toyota/Prius_68x538_TYCK2067000H?fmt=jpeg&fit=crop&wid=767'} title={'Toyota'} desc='10.734 autos'/>
        <CategoryCard img={'https://toyotaassets.scene7.com/is/image/toyota/Prius_68x538_TYCK2067000H?fmt=jpeg&fit=crop&wid=767'} title={'Toyota'} desc='10.734 autos'/>
        <CategoryCard img={'https://toyotaassets.scene7.com/is/image/toyota/Prius_68x538_TYCK2067000H?fmt=jpeg&fit=crop&wid=767'} title={'Toyota'} desc='10.734 autos'/>
      </CategoriesContainer>
    </HomeSection>
  )
}

export default Categories