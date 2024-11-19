import React from 'react';
import Select from 'react-select';

// Custom styles for the select component
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: 'transparent linear-gradient(85deg, #FBF4FF 0%, #E5F0FF 100%) 0% 0% no-repeat padding-box', // Gradient background
    borderColor: state.isFocused ? '#cfe4fc' : '#ccc', // Border color based on focus
    boxShadow: state.isFocused ? '0 0 3px rgba(0, 123, 255, 0.5)' : 'none', // Focus shadow effect
    '&:hover': {
      borderColor: '#cfe4fc' // Hover border color
    },
    height: '40px', // Adjust height to match the image
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '12px',
    background: 'transparent linear-gradient(85deg, #FBF4FF 0%, #E5F0FF 100%) 0% 0% no-repeat padding-box', // Gradient background for the dropdown
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for the dropdown
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#999', // Font color for selected value
    fontSize: '12px', // Font size adjustment
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? '#cfe4fc' : 'transparent',
    color: '#333',
    padding: 10,
    '&:hover': {
      background: '#e0f0ff', // Hover effect for options
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#999',
    fontSize: '12px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#999',
    '&:hover': {
      color: '#666',
    },
  }),
};

const CustomSelect = (props) => {
  return (
    <div style={{ width: "100%"}}>
      <Select
        styles={customStyles}
        options={props.options}
        placeholder={props.placeholder}
        isClearable
      />
    </div>
  );
};

export default CustomSelect;
