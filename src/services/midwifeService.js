import axios from 'axios';
import AuthService from '../services/authService';

const API_URL = 'http://localhost:8082/api/v1/midwife';

// --- Mother-related Services ---

export const getExpectedMothers = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-all-expected-mother`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching expected mothers:', error);
    throw new Error(error.response ? error.response.data : 'Error fetching data');
  }
};

export const getDeliveredMother = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-all-delivered-mother`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching delivered mothers:', error);
    throw new Error(error.response ? error.response.data : 'Error fetching data');
  }
};

export const registerMother = async (formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/mother-register`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data.responseMzg;
  } catch (error) {
    console.error('Error in mother registration:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error registering mother');
  }
};

export const getBasicDetails = async ({ motherId }) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/get-basic-details/${motherId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Error fetching data');
  }
};

export const addClinicRecord = async (motherId, formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/clinic-record/${motherId}`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data.responseMzg;
  } catch (error) {
    console.error('Error in record adding:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error record adding');
  }
};

export const getClinicRecord = async ({ motherId }) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.get(`${API_URL}/clinic-record/${motherId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching clinic records:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error fetching records');
  }
};

// --- Child-related Services ---

export const registerChild = async (formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('User not authenticated. Please log in.');
    }

    const response = await axios.post(`${API_URL}/child-register`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error in child registration:', error?.response?.data || error.message);
    throw new Error(error.response ? error.response.data : 'Error registering child');
  }
};



export const getChildDetails = async (childId) => {
  try {
    const token = AuthService.getToken(); // Get the authentication token
    if (!token) {
      throw new Error("User not authenticated. Please log in.");
    }

    const response = await axios.get(`${API_URL}/get-child-details/${childId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Ensure the backend sends correct data here
  } catch (error) {
    console.error("Error fetching child details:", error.response?.data || error.message);
    throw new Error(error.response?.data || "Failed to fetch child details.");
  }
};


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
