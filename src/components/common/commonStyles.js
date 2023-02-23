import styled, {css} from 'styled-components';
import breakpoints from './breakpoints'


export const primaryColor = "#F0572D";
export const color2 = "#31363F";
export const color3 = "#191B1D";
export const color4 = "#DFE4EA";
export const transparent2_5 = 'rgba(49,54,63, .5)';
export const transparent2_1 =  'rgba(49,54,63, .1)';

export const handleColor = color => {
    switch(color) {
        case "primary":
            return primaryColor;
        case "color2":
            return color2;
        case "color3":
            return color3;
        case "color4":
            return color4;
        case "transparent2-5":
            return transparent2_5;
        case "transparent2-1":
            return transparent2_1;
        default:
            return color;
    }
}

const textColorStyle = css`
    color: ${({ color }) => color ? handleColor(color) : handleColor(color2)};
    text-align: ${({ align }) => align ? align : "left"};
    margin: ${({ margin }) => margin ? margin : "0"};
`

export const Heading1 = styled.h1`
    ${textColorStyle};
    font-size: 24px;
    font-weight: bold;
`

export const Heading2 = styled.h2`
    ${textColorStyle};
    font-size: 20px;
    font-weight: bold;
`

export const Heading3 = styled.h3`
    ${textColorStyle}; 
    font-size: 16px;
    font-weight: bold;
`

export const Heading4 = styled.h4`
    ${textColorStyle};
    font-size: 14px;
    font-weight: bold;
`

export const HomeTitle = styled.h2`

    font-size: 24px;
    margin: 10px 0;
    color: ${({ color }) => color ? handleColor(color) : handleColor('white')};
    @media (min-width: ${breakpoints.tablet}) {
        color: ${({ color }) => color ? handleColor(color) : handleColor(color2)};
    }

`

export const Text1 = styled.p`
    ${textColorStyle};
    font-size: 14px;
    font-weight: 500;
`

export const Text2 = styled.p`
    ${textColorStyle};
    font-size: 12px;
    font-weight: 500;
`

export const buttonSharedStyle = css`
    padding: 10px 20px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    background: none;
    border: none;
    transition-duration: 0.2s;
    &:hover {
        filter: brightness(90%);
    }
`

export const Button1 = styled.button`
    ${textColorStyle};
    ${ buttonSharedStyle };
    font-size: 14px;
    font-weight: bold;
`

export const Button2 = styled.button`
    ${textColorStyle};
    ${ buttonSharedStyle };
    font-size: 16px;
    font-weight: bold;
`

export const FilledButton = styled(Button2)`
    color: white;
    background-color: ${ primaryColor };
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

export const OutlinedButton = styled(Button2)`
    color: ${ primaryColor };
    background-color: white;
    border: 1px solid ${ primaryColor };
`

export const Input = styled.input`
    font-size: 16px;
    padding: 9px 10px;
    border: 0;
    border-radius: 5px;
    outline: 0;
`

export const Button = styled.button`
    appearance: none; 
    border: none;
    width: 15%;
    height: 4vh;
    padding: 5px 10px;
    font-size: 1.4rem;
    border-radius: 7.5px;
    box-shadow: 0px 2.5px 10px rgba(0,0,0, 0.25);
    background-color: ${primaryColor};
    color: white;
`
export const Form = styled.form`
    display: flex;
    padding: 30px 50px;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    min-height: calc(100vh - 94px - 58px);

    @media (min-width: ${breakpoints.tablet}) {
        width: 500px;
        margin: 0 auto;
    }

    
`

export const Strong = styled.strong`
    color: ${ primaryColor };
`

export const InputContainer = styled.div`
    /* width: 50%; */
    /* height: 5vh; */
    position: relative;
    & > label {
        font-size: 1rem;
        font-weight: bold;
    }
    & > input {
        margin-top: 10px;
        border: ${({wrong}) => wrong ? '1px solid red' : 'none'};
        background-color: ${({wrong}) => wrong ? 'rgba(255,225,225,1)' : 'none'};
        width: 100%;
        -webkit-appearance: none;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
        -webkit-appearance: none;
        &:focus {
            outline: none;
        }
    }

    & > svg {
        position: absolute;
        right: 5px;
        top: 32px;
        appearance: none;
        border: none;
        padding: 10px;
    }
    /* @media (min-width: ${breakpoints.tablet}) {
        width: 60%;
    } */
    /* @media (min-width: ${breakpoints.desktop}) {
        width: 50%;
    } */
`

// export const Container = styled.div`

//     width: ${({width}) => width ? width : '100%'};
//     height: ${({height}) => height ? height : 'auto'};
//     display: flex;
//     justify-content: ${({justify}) => justify ? justify : 'flex-start'};
//     align-items: ${({align}) => align ? align : 'flex-start'};
//     gap: ${({gap}) => gap ? gap : '0px'};

// `

export const Separator = styled.hr`
    background-color: ${({ color }) => color ? handleColor(color) : handleColor(color2)};
    width: 100%;
    border: none;
    height: 1px;
`
export const SubmitContainer = styled.div`

    width: 100%;  
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    & > h4 {
        align-self: center;
    }
    @media (min-width: ${breakpoints.desktop}) {
        & > button {
            width: 250px;
            align-self: center;
        }
    }

`
export const Card = styled.article`
    background-color: white;
    
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;

    display: flex;
    flex-direction: column;
`

export const FooterSpace = styled.div`
    height: 58px;
`

export const HomeSection = styled.section`
    background: ${({ color }) => color ? handleColor(color) : handleColor(color2)};
    padding: 10px 15px;
    @media (min-width: ${breakpoints.tablet}) {
        padding: 10px 40px;
        background: ${({ color }) => color ? handleColor(color) : handleColor(transparent2_1)};
    }
`


export const InputError = styled(Text2)`
    color: red;
    margin-top: 5px;
    font-weight: bold;
    text-align: right;
`