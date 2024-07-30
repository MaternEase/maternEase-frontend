import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ title }) => {
  return (
    <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '10px' }}>
      {title}
    </Typography>
  );
};

export default SectionTitle;
