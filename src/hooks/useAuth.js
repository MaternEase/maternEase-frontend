import { useState, useEffect } from 'react';
import AuthService from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const signIn = async (email, password) => {
    try {
      const userData = await AuthService.signIn(email, password);
      console.log('User data after signIn:', userData);
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // console.log('User signed out');

  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      // console.log('Stored user data on load:', storedUser);
      setUser(storedUser);
    }
  }, []);

  return { user, signIn, signOut };
};
