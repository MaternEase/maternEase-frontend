import axios from 'axios';

const API_URL = 'http://localhost:8082';

const AuthService = {
  async signIn(email, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/';
  },
  isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  },
  getUserRole() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.role;
  },
};

export default AuthService;



// export const register = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/register`, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error during register:', error.response ? error.response.data : error.message);
//     throw error.response ? error.response.data : error;
//   }
// };

// export const refreshToken = async (token) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/refresh`, { token });
//     return response.data;
//   } catch (error) {
//     console.error('Error during refreshToken:', error.response ? error.response.data : error.message);
//     throw error.response ? error.response.data : error;
//   }
// };

// export const getUserProfile = async (token) => {
//   try {
//     const response = await axios.get(`${API_URL}/adminuser/get-profile`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error during getUserProfile:', error.response ? error.response.data : error.message);
//     throw error.response ? error.response.data : error;
//   }
// };
