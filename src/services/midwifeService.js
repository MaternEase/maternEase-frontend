import axios from 'axios';
import AuthService from '../services/authService';

const API_URL = 'http://localhost:8082/api/v1/midwife';

export const registerMother = async (formData) => {
  try {
    const token = AuthService.getToken(); // Get token

    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/mother-register`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Attach the token
      },
    });

    return response.data.responseMzg;
  } catch (error) {
    console.error('Error in mother registration:', error);
    throw new Error(error.response ? error.response.data : 'Error registering mother');
  }
};
