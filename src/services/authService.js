import axios from 'axios';

const API_URL = 'http://yourapi.com/auth';

export const signIn = async (username, password) => {
  const response = await axios.post(`${API_URL}/signin`, { username, password });
  return response.data;
};
