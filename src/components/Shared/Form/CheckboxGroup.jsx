import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Box, Typography } from '@mui/material';

const CheckboxGroup = ({ options }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={4} justifyContent="space-between">
      {options.map((option, index) => (
        <Box key={index} display="flex" flexDirection="column" alignItems="flex-start" width="45%">
          <Typography>{option.label}</Typography>
          <RadioGroup row name={option.name} display="flex" flexDirection="column" alignItems="flex-start" width="45%">
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            <Box width={20} />
            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
          </RadioGroup>
        </Box>
      ))}
    </Box>
  );
};

export default CheckboxGroup;
