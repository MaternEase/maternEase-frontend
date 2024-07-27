import * as React from 'react';
import { Button } from '@mui/material';

const ProfileButton = ({ variant, color, children, ...props }) => {
  return (
    <Button variant={variant} color={color} {...props}>
      {children}
    </Button>
  );
};

export default ProfileButton;

