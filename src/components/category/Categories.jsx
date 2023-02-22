import React from 'react'
import { CategoriesContainer, } from './categoriesStyles'
import { HomeSection, HomeTitle, color2 } from '../common/commonStyles'
import CategoryCard from './CategoryCard'
import SkeletonCategory from './SkeletonCategory'

const Categories = ({ categories }) => {
    return (
        <HomeSection color='white'>
            <HomeTitle color={color2}>Buscá por marca</HomeTitle>
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