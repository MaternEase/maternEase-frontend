import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const CustomSelect = ({ label, name, options }) => {
  return (
    <Box flex="1">
      <FormControl variant="outlined" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select label={label} name={name} defaultValue="">
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
