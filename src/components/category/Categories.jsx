import React from 'react'
import { CategoriesContainer, SkeletonCard } from './categoriesStyles'
import { Heading2, HomeSection, HomeTitle } from '../common/commonStyles'
import CategoryCard from './CategoryCard'
import SkeletonCategory from './SkeletonCategory'

const Categories = () => {
  return (
    <HomeSection>
      <HomeTitle>Buscar por marca</HomeTitle>
      <CategoriesContainer>
        <CategoryCard img={'https://toyotaassets.scene7.com/is/image/toyota/Prius_68x538_TYCK2067000H?fmt=jpeg&fit=crop&wid=767'} title={'Toyota'} desc='10.734 autos'/>
        <CategoryCard img={'https://toyotaassets.scene7.com/is/image/toyota/Prius_68x538_TYCK2067000H?fmt=jpeg&fit=crop&wid=767'} title={'Toyota'} desc='10.734 autos'/>
        <SkeletonCategory/>
        <SkeletonCategory/>
      </CategoriesContainer>
    </HomeSection>
  )
}

export default Categories