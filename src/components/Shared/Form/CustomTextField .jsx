import React from 'react';
import { TextField, Box } from '@mui/material';

const CustomTextField = ({ label, name }) => {
  return (
    <Box flex="1">
      <TextField label={label} name={name} variant="outlined" fullWidth />
    </Box>
  );
};

export default CustomTextField;
