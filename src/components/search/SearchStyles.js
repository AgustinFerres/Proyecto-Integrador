import styled from "styled-components";
import { Heading2, transparent2_5 } from "../common/commonStyles";
import breakpoints from "../common/breakpoints"
import { FilledButton, Input } from '../common/commonStyles';
import SearchSelect from "./SearchSelect";
import Calendar from "./Calendar";

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

export const SelectDate = styled(Calendar)`
    
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

export const Select = styled.div`
    position: relative;
    background-color: white;
    padding: 9px 10px;
    border-radius: 5px;
    font-size: 16px;
    & > div:first-of-type {
        display: flex;
        justify-content: space-between;
        
    }
    & > div > p {
        display: flex;
        gap: 8px;
    }
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