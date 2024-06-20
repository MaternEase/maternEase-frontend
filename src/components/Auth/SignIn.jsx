import React, { useState, useEffect } from 'react';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import { useAuth } from '../../hooks/useAuth';
import loginMom from '../../assets/images/loginMom.webp'; // Import the image

const SignIn = () => {
  const { signIn } = useAuth();
  const [dimensions, setDimensions] = useState({
    marginLeft: '14rem',
    marginTop: '5rem',
    marginRight: '14rem',
    marginBottom: '5rem',
  });

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 480) {
      setDimensions({
        marginLeft: '1rem',
        marginTop: '2rem',
        marginRight: '1rem',
        marginBottom: '2rem',
      });
    } else if (width <= 768) {
      setDimensions({
        marginLeft: '5rem',
        marginTop: '3rem',
        marginRight: '5rem',
        marginBottom: '3rem',
      });
    } else if (width <= 1024) {
      setDimensions({
        marginLeft: '10rem',
        marginTop: '5rem',
        marginRight: '10rem',
        marginBottom: '5rem',
      });
    } else {
      setDimensions({
        marginLeft: '14rem',
        marginTop: '5rem',
        marginRight: '14rem',
        marginBottom: '5rem',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial dimensions
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    signIn(username.value, password.value);
  };

  const { marginLeft, marginTop, marginRight, marginBottom } = dimensions;

  return (
    <div
      className="flex items-center justify-center bg-center bg-cover responsive-background"
      style={{
        backgroundImage: `url(${loginMom})`,
        height: `calc(100vh - ${marginTop} - ${marginBottom})`,
        width: `calc(100vw - ${marginLeft} - ${marginRight})`,
        marginLeft,
        marginTop,
        marginRight,
        marginBottom,
        boxSizing: 'border-box',
        border: '2px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '29px',
        boxShadow: '0 15px 20px rgba(1, 1, 1, 0.7)',
      }}
    >
      <div className="flex items-center justify-center w-full h-full p-4">
        <form
          className="flex flex-col items-center w-full max-w-md p-10 rounded-lg shadow-2xl bg-sky-100 bg-opacity-60 backdrop-blur-md responsive-form"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-6 text-3xl font-bold text-gray-800">Sign In</h1>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <a href="#" className="mb-4 text-sm text-blue-500 hover:text-blue-700">
            Forgot your password?
          </a>
          <Button
            type="submit"
            className="w-full py-2 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
