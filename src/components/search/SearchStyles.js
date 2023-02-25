import styled from "styled-components";
import { color4, Heading2, transparent2_5 } from "../common/commonStyles";
import breakpoints from "../common/breakpoints"
import { FilledButton, Input } from '../common/commonStyles';
import SearchSelect from "./SearchSelect";

export const SearchContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #191B1D;
    @media (min-width: ${breakpoints.tablet}) {
        padding-bottom: 25px;
    }
`

export const InputSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #191B1D;
    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: center;
        margin: 0 75px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        margin: 0 150px;
    }
      
`
export const SearchHeading = styled(Heading2)`
    text-align: center;
    margin: 20px 0px;
    font-size: 30px;
`

export const SelectDaysContainer = styled.div`

    position: relative;
    @media (min-width: ${breakpoints.tablet}) {
        flex: 2 1 0;
    }
`

export const SelectDate = styled.div`

    display: flex;
    gap: 10px;
    background-color: white;
    padding: 9px 10px;
    border-radius: 5px;
    font-size: 16px;
    min-width: 215px;


`


export const Day = styled.p`
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${({ disabled }) => disabled ? 'visible' : 'all'};
    opacity: ${({ disabled }) => disabled ? '.5' : '1'};
    background-color: ${({ selectedRange, startORend }) => startORend ? 'rgba(247,81,45, 1)' : selectedRange ? 'rgba(247,81,45,.7)' : ''};
    padding: 5px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    text-align: center;
    color: ${({ selectedRange }) => selectedRange ? 'white' : 'black'};
    font-weight: 500;

    @media (min-width: ${breakpoints.tablet}) {

        &:hover {
            background-color: rgba(247,81,45, .5);
        }
    }
`


export const CalendarContainer = styled.div`
    user-select: none;
    position: absolute;
    top: 45px;
    background-color: white;
    z-index: 1;
    width: 100%;
    padding: 30px 40px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
    font-size: 14px;
    transform-origin: top;
    & > button {
        width: 100%;
        margin-top: 20px;
    }

    animation: .25s appear ease-out;

    @keyframes appear {
        from {
            transform: scale(1, 0);
        }
        to {
            transform: scaleY(1);
        }
    }

    @media (min-width: ${breakpoints.tablet}) {
        width: 202.5%;
        left: -102.5%;

    }
    @media (min-width: 930px) {
        
        & > :first-child {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr .5px 1fr;
            gap: 5px;
        }
    }
    @media (min-width: ${breakpoints.desktop}) {
        width: 165%;
        left: 0;
        display: grid;
        grid-template-rows: 4fr 1fr;
        grid-template-columns: 1fr 1fr;
        & > :first-child {
            grid-column: 1/3;
        }
        & > button {
            width: 70%;
            grid-row: 2;
            grid-column: 2;
            max-width: 250px;
            justify-self: flex-end;
            position: relative;
        }

    }
    @media (min-width: 1500px) {
        width: 125%;
        left: 0;

    }
`

export const CalendarHeader = styled.div`

    padding: 20px 10px;
    padding-right: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    & > p {
        font-weight: bold;
    }
    @media (min-width: ${breakpoints.tablet}) {
        display: grid;
        align-items: center;
        justify-items: space-between;
        grid-template-rows: 1fr;
        grid-template-columns: .1fr .5fr .5fr .1fr;
        & > p {
            grid-column: 2/4;
            justify-self: center;
        }
        & > svg {

        }
    }
`

export const CalendarDisplay = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    justify-items: center;
    
`

export const CalendarWeekDays = styled.p`
    font-weight: bolder;

`

export const SearchButton = styled(FilledButton)`
    @media (min-width: ${breakpoints.tablet}) {
        flex: 1 1 0;
    }
`

export const SearchCity = styled(SearchSelect)`
    @media (min-width: ${breakpoints.tablet}) {
        flex: 2 1 0;
    }
`

export const SearchDate = styled(Input)`
    @media (min-width: ${breakpoints.tablet}) {
        flex: 2 1 0;
    }
`

export const SelectCityInput = styled.div`

    display: grid;
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 1fr;
    gap: 10px;
    background-color: white;
    padding: 9px 10px;
    border-radius: 5px;
    font-size: 16px;
    min-width: 215px;


`

export const Select = styled.div`
    position: relative;

    & > div > button {
        margin-right: 4px;
        appearance: none;
        border: none;
        background-color: transparent;
    }
    @media (min-width: ${breakpoints.tablet}) {
        flex: 2 1 0;
    }

`
export const SelectContainer = styled.div`
    user-select: none;
    position: absolute;
    overflow-y: scroll;
    max-height: 250px;
    background-color: white;
    width: 100%;
    left: 0;
    top: 45px;
    z-index: 1;
    padding: 5px 15px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
    transform-origin: top;
    animation: .25s appear ease-out;
    & > hr:last-of-type {
        display: none;
    }
    &::-webkit-scrollbar {
        width: 8px;
        background-color: rgba(0,0,0,.15);
    }
    &::-webkit-scrollbar-thumb {
        width: 6px;
        background-color: rgba(240, 87 ,45, .7);
        border-radius: 10px;
    }
`

export const SelectOption = styled.div`

    display: flex;
    align-items: center;
    gap: 21px;
    padding: 12px 0;
    & > div > p {
        color: ${transparent2_5};
        font-weight: bold;
    }
    &:hover {
        background: linear-gradient(
            90deg, 
            white 0%, 
            rgba(240,87,45, .08) 5%, 
            rgba(240,87,45, .12) 50%, 
            rgba(240,87,45, .08) 95%, 
            white 100%
        );
    }
`