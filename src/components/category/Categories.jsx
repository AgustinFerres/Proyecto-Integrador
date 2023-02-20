import React from 'react'
import { CategoriesContainer, SkeletonCard } from './categoriesStyles'
import { Heading2, HomeSection, HomeTitle } from '../common/commonStyles'
import CategoryCard from './CategoryCard'
import SkeletonCategory from './SkeletonCategory'

const Categories = ({ categories }) => {
    return (
        <HomeSection>
            <HomeTitle>Buscá por marca</HomeTitle>
            <CategoriesContainer>
                {
                    categories ? categories.map(category => <CategoryCard key={ category.id } img={ category.img } title={ category.title } description={ category.description } />)
                    :
                    <>
                        <SkeletonCategory />
                        <SkeletonCategory />
                    </>
                }

                {/* <SkeletonCategory/>
        <SkeletonCategory/> */}
            </CategoriesContainer>
        </HomeSection>
    )
}

export default Categories