import React from 'react';
import { FormControlLabel, Checkbox, Box } from '@mui/material';

const CheckboxGroup = ({ options }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {options.map((option, index) => (
        <Box key={index} flex="1 1 calc(50% - 16px)">
          <FormControlLabel
            control={<Checkbox name={option.name} color="primary" />}
            label={option.label}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CheckboxGroup;
