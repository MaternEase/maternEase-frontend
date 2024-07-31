import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:15000/auth/clinics';

export const listClinics = () => axios.get(REST_API_BASE_URL);