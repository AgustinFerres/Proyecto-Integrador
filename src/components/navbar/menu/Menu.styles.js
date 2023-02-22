import styled, { css } from "styled-components"
import { Button2, Heading2, buttonSharedStyle, primaryColor, color2 } from "../../common/commonStyles"
import breakpoints from "../../common/breakpoints"

export const HamburguerButton = styled.button`
    ${ buttonSharedStyle }
    padding: 10px;

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }
`
export const MenuOverlay = styled.div`
    pointer-events: none;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color:black;
    opacity: 0;
    z-index: 9;
    transition: opacity 0.2s ease-out;
    ${ props => props.expanded && css`
        opacity: 0.5;
    `};
`


export const MenuContainer = styled.div`
    position: fixed;
    width: 75%;
    height: 100%;
    right: 0px;
    top: 0px;
    transform: translateX(100%);
    opacity: 0.2;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    background: white;
    z-index: 10;
    ${ props => props.expanded && css`
        transform: translateX(0);
        opacity: 1;
    `};
`

export const MenuHeaderContainer = styled.header`
    background-color: ${primaryColor};
    height: 175px;
    position: relative;
`

export const MenuTitle = styled(Heading2)`
    text-transform: uppercase;
    color: white;
    position: absolute;
    bottom: 20px;
    right: 20px;
`

export const CloseButton = styled.button`
    ${ buttonSharedStyle };
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
`

export const MenuFooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    & > p {
            position: absolute;
            right: 25px;
            top: -20px;
            font-weight: bold;
            font-size: 12px;
            color: ${color2};
        }
    & > hr {
        position: relative;
        align-self: center;
        width: 90%;
    }
    & > :last-child {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        padding: 20px;
    }
`

export const MenuBodyContainer = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & > hr:last-of-type {
        display: none;
    }
`

export const MenuButton = styled(Button2)`
    padding: 15px 0;
`