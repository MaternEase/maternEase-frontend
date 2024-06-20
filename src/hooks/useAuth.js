import { useState } from 'react';
import { signIn as signInService } from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      const userData = await signInService(email, password);
      setUser(userData);
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return { user, signIn };
};
