import styled, { css } from 'styled-components';
import breakpoints from '../common/breakpoints';
import { Heading4, Strong, Text1, buttonSharedStyle, color2, color3, primaryColor } from '../common/commonStyles';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.header`
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
    @media (min-width: ${breakpoints.tablet}) {
        box-shadow: none;
    }
`

export const LinksContainer = styled.div`
    display: none;
    gap: 16px;

    @media (min-width: ${breakpoints.tablet}) {
        display: flex;
    }
`

export const UserContainer = styled.div`

    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;

    @media (min-width: ${breakpoints.tablet}) {
        position: static;
        flex-direction: row;
        align-items: center;
    }

    & > :first-child {
        background-color: white;
        padding: 10px;
        border-radius: 50%;
        color: ${color3
        };
        font-weight: bold;
        @media (min-width: ${breakpoints.tablet}) {
            background-color: ${primaryColor};
            color: white;
        }
    }
    & > :last-child {
        position: relative;
        & > svg {
            display: none;
            position: absolute;
            top: -10px;
            right: 5px;
            &:active {
                animation: 1s press;
            }
            @keyframes press {
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
            @media (min-width: ${breakpoints.tablet}) {
                display: inline-block;
            }
        }
    }

`

export const HeadingUser = styled(Heading4)`
    color: white;
    text-align: right;
    @media (min-width: ${breakpoints.tablet}) {
        color: ${color2};
        text-align: left;
    }
`

export const UserName = styled(Strong)`
    color: ${color2};
    @media (min-width: ${breakpoints.tablet}) {
        color: ${primaryColor}
    }
`

export const LogoText = styled(Text1)`
    display: none;
    font-weight: 300;
    font-size: 18px;

    @media (min-width: ${breakpoints.desktop}) {
        display: inline-block;
    }
`

export const LogoLink = styled(Link)`
    display: flex;
    align-items: flex-end;
    gap: 12px;
    text-decoration: none;
    
`