import React from 'react'
import Select from 'react-select';

const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      height: '40px',
      boxShadow: "none"
    })
  };

const SearchSelect = ({ options, className }) => {
    return (
        <Select className={className} options={options} styles={customStyles} />
    );
}

export default SearchSelect