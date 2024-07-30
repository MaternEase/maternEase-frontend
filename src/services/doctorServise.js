import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8082/auth/doctor";

export const listDoctor =()=> 
   axios.get(REST_API_BASE_URL);
