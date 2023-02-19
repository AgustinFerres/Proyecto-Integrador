import styled from 'styled-components';
import breakpoints from '../common/breakpoints'



export const CategoriesContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;

    @media (min-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`

export const CategoryDescription = styled.div`
    position: relative;
    background-color: white;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    padding: 10px 15px;

    & :first-child {
        margin-bottom: 5px;
    }
`

export const CategoryImage = styled.img`
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;  
`

