import axios from 'axios';
import AuthService from '../services/authService';

const API_URL = 'http://localhost:8082/api/v1/mother';

export const getSchedules = async () => {

    try{
      const token =AuthService.getToken();
    const userId = localStorage.getItem('user_id');
      if(!token) {
        throw new Error('User not authenticated.Please log in.');
      }
  
      const response =await axios.get(`${API_URL}/get-schedules/${userId}`,{
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}` ,
        },
      });
      console.log("Service", response.data);
      return response.data;
    }catch (error){
      throw new Error(error.response ? error.response.data : 'Error fetching data');
    }
  }