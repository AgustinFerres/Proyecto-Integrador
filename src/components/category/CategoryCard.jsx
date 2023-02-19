import React from 'react'
import { Card, Heading2, Heading4 } from '../common/commonStyles'
import { CategoryDescription, CategoryImage } from './categoriesStyles'

const CategoryCard = ({img, title, desc, alt}) => {
    return (
    <Card>
        <CategoryImage src={img} alt={alt} />
        <CategoryDescription>
            <Heading2>{title}</Heading2>
            <Heading4 color='transparent2-5'>{desc}</Heading4>
        </CategoryDescription>
    </Card>
    )
}

export default CategoryCard