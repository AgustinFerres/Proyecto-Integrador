import styled from 'styled-components';
import breakpoints from '../common/breakpoints'
import { color4 } from '../common/commonStyles';



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
    aspect-ratio: 16/11;
    object-fit: cover;  
`

export const  SkeletonCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > :first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        aspect-ratio: 16/9;
        background-image: linear-gradient(
            90deg,
            ${color4} 0px,
            #efefef 30px,
            ${color4}  60px
        );
        animation: 2s infinite move ease-in-out;


        @keyframes move {
            from {
                background-position: 0px 0px;
            }
            to {
                background-position: 90vw 0px; 
            }
        }

        @media (min-width: ${breakpoints.tablet}) {
                @keyframes move {
                from {
                    background-position: 0px 0px;
                }
                to {
                    background-position: 42.5vw 0px; 
                }
            }
        }
        @media (min-width: ${breakpoints.desktop}) {
                @keyframes move {
                from {
                    background-position: 0px 0px;
                }
                to {
                    background-position: 23vw 0px; 
                }
            }
        }
    }

    & > p:first-of-type {
        width: 100%;
        height: 10%;
        background-image: linear-gradient(
            90deg,
            ${color4} 0px,
            #efefef 30px,
            ${color4}  60px
        );
    }

    & > :last-child {
        width: 100%;
        height: 5%;
        background-image: linear-gradient(
            90deg,
            ${color4} 0px,
            #efefef 30px,
            ${color4}  60px
        );
        border-radius: 0 0 10px 10px;
    }
    & > p {
        animation: 2s infinite move ease-in-out;
    }
`