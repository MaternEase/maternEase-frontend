import * as React from 'react';
import { Button } from '@mui/material';

const ProfileButton = React.forwardRef(({ variant, color, children, ...props }, ref) => {
  return (
    <Button ref = {ref} variant={variant} color={color} {...props}>
      {children}
    </Button>
  );
});

export default ProfileButton;

