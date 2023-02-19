import React from 'react';
import { useState } from 'react';
import { InputSearchContainer, SearchButton, SearchCity, SearchContainer, SearchDate, SearchHeading } from './SearchStyles';
import { Input } from '../common/commonStyles';

const Search = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const carAgency = [
    { label: 'Buenos Aires', value: 'Buenos Aires' },
    { label: 'Cordoba', value: 'Cordoba' },
    { label: 'Salta', value: 'Salta' },
    { label: 'Ushuaia', value: 'Ushuaia' },
    { label: 'Mar del Plata', value: 'Mar del Plata' },
  ]

  return (
    <SearchContainer>
      <SearchHeading color='white' >¡Ofertas en alquiler de vehiculos!</SearchHeading>
      <InputSearchContainer>
        <SearchCity options={carAgency}></SearchCity>
        <SearchDate type='date' />
        <SearchButton>Buscar</SearchButton>
      </InputSearchContainer >
    </SearchContainer>

  )
}

export default Search