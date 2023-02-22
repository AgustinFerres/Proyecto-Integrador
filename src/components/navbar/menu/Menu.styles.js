import styled, { css } from "styled-components"
import { Button2, Heading2, buttonSharedStyle, primaryColor } from "../../common/commonStyles"
import breakpoints from "../../common/breakpoints"

export const HamburguerButton = styled.button`
    ${ buttonSharedStyle }
    padding: 10px;

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }
`

export const MenuContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0px;
    top: 0px;
    transform: translateY(-100%);
    opacity: 0.2;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    background: white;
    z-index: 10;
    ${ props => props.expanded && css`
        transform: translateY(0);
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
    display: flex;
    bottom: 0;
    right: 0;
    gap: 16px;
    padding: 20px;
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