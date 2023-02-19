import styled from "styled-components";
import { Heading2 } from "../common/commonStyles";
import breakpoints from "../common/breakpoints"
import { FilledButton, Input } from '../common/commonStyles';
import SearchSelect from "./SearchSelect";
import Select from "react-select";

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