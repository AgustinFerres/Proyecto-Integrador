import React from 'react';
import { InputSearchContainer, SearchButton, SearchContainer, SearchHeading} from './SearchStyles';
import SelectDays from './SelectDays';
import SelectCity from './SelectCity';

const Search = () => {

  return (
    <SearchContainer>
      <SearchHeading color='white' >¡Ofertas en alquiler de vehiculos!</SearchHeading>
      <InputSearchContainer>
        {/* <SearchCity options={carAgency}></SearchCity> */}
        <SelectCity/>
        {/* <SearchDate type='date' /> */}
        <SelectDays />
        <SearchButton>Buscar</SearchButton>
      </InputSearchContainer >
    </SearchContainer>

  )
}

export default Search