import axios from 'axios';
import AuthService from '../services/authService';

const API_URL = 'http://localhost:8082/api/v1/midwife';

// Register a child
export const registerChild = async (formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/child-register`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Attach the token
      },
    });

    return response.data;  // Handle response from backend
  } catch (error) {
    console.error('Error in child registration:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error registering child');
  }
};

// Fetch child details by childId
export const getChildDetails = async (childId) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-child-details/${childId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching child details:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error fetching child details');
  }
};

// Example: Fetch all children
export const getAllChildren = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-all-children`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching children:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error fetching children');
  }
};
