import React from 'react';
import { TextField, Box } from '@mui/material';

const CustomTextField = ({ label, name, type, InputProps ,placeholder }) => {
  return (
    <Box flex="1">
      <TextField label={label} name={name} type={type} placeholder={placeholder} variant="outlined" fullWidth InputProps={InputProps} />
    </Box>
  );
};

export default CustomTextField;
