import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import loginMom from '../../assets/images/loginMom.webp'; // Import the image
import logo from '../../assets/images/logo4.png'; // Import the logo

const SignIn = () => {
  const { signIn } = useAuth();
  const [dimensions, setDimensions] = useState({
    marginLeft: '1rem',
    marginTop: '2rem',
    marginRight: '1rem',
    marginBottom: '2rem',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        marginLeft: '2rem',
        marginTop: '3rem',
        marginRight: '2rem',
        marginBottom: '3rem',
      });
    } else if (width <= 1024) {
      setDimensions({
        marginLeft: '3rem',
        marginTop: '4rem',
        marginRight: '3rem',
        marginBottom: '4rem',
      });
    } else {
      setDimensions({
        marginLeft: '5rem',
        marginTop: '5rem',
        marginRight: '5rem',
        marginBottom: '5rem',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial dimensions
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signIn(email, password);
      console.log('User signed in:', user); // Log the signed-in user
      switch (user.role) {
        case 'ADMIN':
          navigate('/admin/dashboard');
          break;
        case 'MIDWIFE':
          navigate('/midwife/dashboard');
          break;
        case 'DOCTOR':
          navigate('/doctor/dashboard');
          break;
        // Add other cases for different roles as needed
        default:
          navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  const { marginLeft, marginTop, marginRight, marginBottom } = dimensions;

  return (
    <div
      className="flex items-center justify-end bg-center bg-cover responsive-background"
      style={{
        backgroundImage: `url(${loginMom})`,
        minHeight: '100vh',
        overflow: 'hidden',
        paddingLeft: marginLeft,
        paddingTop: marginTop,
        paddingRight: marginRight,
        paddingBottom: marginBottom,
        boxSizing: 'border-box',
      }}
    >
      <div className="fixed w-full max-w-md py-3 sm:max-w-xl ">
        <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-sky-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center pb-0 mt-0 mb-10 text-center">
              <img src={logo} alt="Logo" className="w-20 h-45" />
              <h1 className="ml-1 text-4xl font-bold" style={{ color: '#967AA1' }}>MaternEase</h1>
            </div>
            <div className="mb-4 text-center">
              <p className="mt-2 text-gray-600">Welcome back! Please login to your account.</p>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white rounded-md bg-cyan-500"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
              {error && <p className="mt-2 text-center text-red-500">{error}</p>}
              <div className="mt-4 text-center">
                <a href="/forgot-password" className="text-sm text-cyan-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
