import styled, { css } from "styled-components";

import breakpoints from '../common/breakpoints'
import { color2, color3, color4, primaryColor } from "../common/commonStyles";


export const Card = styled.article`
    position: relative;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
    
`
export const ProductContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    margin: 25px 0;
    
    @media (min-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr;
    }
`

export const ProductDescription = styled.div`
    background-color: white;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
    & :first-child {
        margin-bottom: 5px;
    }
`

export const ProductImage = styled.img`
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    z-index: -1;
    width: 100%;


    @media (min-width: ${breakpoints.tablet}) {
        border-radius: 10px;
        aspect-ratio: 1/.5;
        object-fit: cover;
        width: 50%;
    }
`




export const Heart = styled.button`

    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    aspect-ratio: 1/1;
    rotate: 45deg;
    border: none;
    cursor: pointer;
    background-color: ${({like}) => like ? 'red' : 'white'};
    &::before {
        content: '';
        position: absolute;
        background-color: ${({like}) => like ? 'red' : 'white'};
        top: -10px;
        left: 0;
        width: 20px;
        aspect-ratio: 1/1;
        border-radius:50%;
    }
    &::after {
        content: '';
        position: absolute;
        background-color: ${({like}) => like ? 'red' : 'white'};
        top: 0px;
        left: -10px;
        width: 20px;
        aspect-ratio: 1/1;
        border-radius:50%;
    }
    
    &:active {

        animation: 1s change ease;
    }
    @media (min-width: ${breakpoints.tablet}) {
        right: 52%;
    }
    @keyframes change {
        0%{
            transform: scale(0.9);
        }
        50%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }
`

export const ProductHeader = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

`


export const ValContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & :first-child {
        border-radius: 10px;
        color: white;
        text-align: center;
        padding: 2px 5px;
        width: 30px;
        background-color: ${color2};
    }
`
export const Star = styled.i`

    cursor: pointer;
    user-select: none; 
    font-size: 20px;
    font-style: normal;

    ${({filled}) => filled === 'half' ? css`
    
    background: linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor} 50%, ${color2} 50%, ${color2} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ` : filled === 'full' ? css`
        color: ${primaryColor};
    ` : css`
        color: ${color2};
    `
}
    

`

export const SkeletonCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: -1;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
    & > :first-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        aspect-ratio: 16/10;
        background-image: linear-gradient(
            90deg,
            ${color4} 0px,
            #efefef 30px,
            ${color4}  60px
        );
        width: 100%;

        animation: 2s infinite move ease-in-out;


        @keyframes move {
            from {
                background-position: 0px 0px;
            }
            to {
                background-position: 91.5vw 0px; 
            }
        }

        @media (min-width: ${breakpoints.tablet}) {
            border-radius: 10px;
            aspect-ratio: 1/.5;
            object-fit: cover;

            @keyframes move {
                from {
                    background-position: 0px 0px;
                }
                to {
                    background-position: 44vw 0px; 
                }
            }
        }
        
        @media (min-width: ${breakpoints.desktop}) {
                @keyframes move {
                from {
                    background-position: 0px 0px;
                }
                to {
                    background-position: 22.5vw 0px; 
                }
            }
        }
    }
    & > div:last-of-type {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        height: 100%;

        & > div {
            width: 100%;
            height: 30%;
            background-image: linear-gradient(
                90deg,
                ${color4} 0px,
                #efefef 30px,
                ${color4}  60px
            );
            animation: 2s infinite move ease-in-out;
    
        }

        & > p {
            width: 100%;
            height: 15%;
            background-image: linear-gradient(
                90deg,
                ${color4} 0px,
                #efefef 30px,
                ${color4}  60px
            );
            animation: 2s infinite move ease-in-out;
        }

        & > p:last-of-type {
            height: 50%;
        }
    }


`