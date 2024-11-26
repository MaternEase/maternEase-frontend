import axios from "axios";
import AuthService from "../services/authService";

const API_URL = "http://localhost:8082/api/v1/admin";

export const registerClinic = async (formData) => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error("User not authenticated. Please log in.");
    }

    const response = await axios.post(`${API_URL}/clinic-register`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching expected mothers:", error);
    throw new Error(
      error.response ? error.response.data : "Error fetching data"
    );
  }
};

export const getClinics = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error("User not authenticated. Please log in.");
    }

    const response = await axios.get(`${API_URL}/clinics`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching expected mothers:", error);
    throw new Error(
      error.response ? error.response.data : "Error fetching data"
    );
  }
};

export const getClinicNames = async () => {
  try {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error("User not authenticated. Please log in.");
    }

    const response = await axios.get(`${API_URL}/clinic-names`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data.map((clinic) => clinic.clinicName);
  } catch (error) {
    console.error("Error fetching expected mothers:", error);
    throw new Error(
      error.response ? error.response.data : "Error fetching data"
    );
  }
};



export const editClinic = async (formData) => {
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
      console.error('Error in mother registration:', error?.response?.data || error.message);
      throw new Error(error.response ? error.response.data : 'Error registering mother');
    }
  };