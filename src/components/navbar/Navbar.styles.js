import styled, { css } from 'styled-components';
import breakpoints from '../common/breakpoints';
import { buttonSharedStyle, primaryColor } from '../common/commonStyles';

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

    display: flex;
    gap: 10px;
    align-items: center;

    & > :first-child {
        background-color: ${primaryColor};
        padding: 10px;
        border-radius: 50%;
        color: white;
        font-weight: bold;
    }
    & > :last-child {
        position: relative;
        & > svg {
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
        }
    }

`