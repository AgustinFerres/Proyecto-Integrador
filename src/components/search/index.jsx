import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { InputSearchContainer, SearchButton, SearchCity, SearchContainer, SearchDate, SearchHeading, Select, SelectContainer, SelectDate, SelectOption } from './SearchStyles';
import { Heading4, Input, primaryColor, Separator, Text1 } from '../common/commonStyles';
import Calendar from './Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Search = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [locations, setLocations] = useState(null)
  const [expanded, setExpanded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    cityName: '',
    countryName: '',
  })


  useEffect(() => {
    axios.get('cities.json')
    .then(res => setLocations(res.data))
    .catch(err => console.log(err))
  }, [])


  const handleSelected = (cityName, countryName) => {
    setSelectedLocation(prev => ({cityName, countryName }));
    setExpanded(prev => false);
  }

  return (
    <SearchContainer>
      <SearchHeading color='white' >¡Ofertas en alquiler de vehiculos!</SearchHeading>
      <InputSearchContainer>
        {/* <SearchCity options={carAgency}></SearchCity> */}
        <Select>
          <div onClick={() => setExpanded(prev => !prev)}>
            <p><FontAwesomeIcon opacity={selectedLocation.cityName !== '' ? '1' : '.7'} color={primaryColor} fontSize={'20px'} icon={'fa-solid fa-location-dot'}/> <span>{selectedLocation.cityName !== '' ? `${selectedLocation.cityName}, ${selectedLocation.countryName}` : '¿A dónde vamos?'}</span></p>
            <button><FontAwesomeIcon icon={expanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}/></button>
          </div>
          {
            expanded && 
            <SelectContainer>
              {
                locations.map(country => country.cities.map(city => 
                <Fragment key={city}>
                  <SelectOption onClick={() => handleSelected(city, country.name)}>
                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
                      <path d="M8.5 5.175C9.30512 5.175 10.0773 5.4779 10.6466 6.01707C11.2159 6.55623 11.5357 7.2875 11.5357 8.05C11.5357 8.42755 11.4572 8.8014 11.3046 9.15022C11.1521 9.49903 10.9285 9.81596 10.6466 10.0829C10.3647 10.3499 10.03 10.5617 9.66172 10.7062C9.29341 10.8506 8.89866 10.925 8.5 10.925C7.69488 10.925 6.92273 10.6221 6.35343 10.0829C5.78412 9.54376 5.46429 8.8125 5.46429 8.05C5.46429 7.2875 5.78412 6.55623 6.35343 6.01707C6.92273 5.4779 7.69488 5.175 8.5 5.175ZM8.5 0C10.7543 0 12.9163 0.848122 14.5104 2.35779C16.1045 3.86746 17 5.91501 17 8.05C17 14.0875 8.5 23 8.5 23C8.5 23 0 14.0875 0 8.05C0 5.91501 0.895533 3.86746 2.48959 2.35779C4.08365 0.848122 6.24566 0 8.5 0V0ZM8.5 2.3C6.88976 2.3 5.34547 2.9058 4.20685 3.98414C3.06824 5.06247 2.42857 6.52501 2.42857 8.05C2.42857 9.2 2.42857 11.5 8.5 19.2165C14.5714 11.5 14.5714 9.2 14.5714 8.05C14.5714 6.52501 13.9318 5.06247 12.7931 3.98414C11.6545 2.9058 10.1102 2.3 8.5 2.3V2.3Z" fill="#F0572D"/>
                    </svg>
                    <div>
                      <Heading4 color='black'>{city}</Heading4>
                      <Text1>{country.name}</Text1>
                    </div>
                  </SelectOption>
                  <Separator color={primaryColor}/>
                </Fragment>))
              }
            </SelectContainer>
          }
        </Select>
        {/* <SearchDate type='date' /> */}
        <SelectDate />
        <SearchButton>Buscar</SearchButton>
      </InputSearchContainer >
    </SearchContainer>

  )
}

export default Search