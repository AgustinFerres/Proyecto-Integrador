import styled from "styled-components";
import { primaryColor, Text1 } from "../common/commonStyles";
import breakpoints from "../common/breakpoints";

export const FooterContainer = styled.footer`
    background-color: ${ primaryColor };
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 58px;
`

export const SocialContainer = styled.div`
    display: none;
    gap: 16px;
    color: white;
    @media (min-width: ${breakpoints.tablet}) {
        display: flex;
    }
`

export const SocialIcon = styled.a`
    color: ${ props => props.color ? props.color : 'white'};
`

export const CopyrightText = styled(Text1)`
    font-weight: bold;
`