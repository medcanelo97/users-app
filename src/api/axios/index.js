import axios from 'axios';

//  Creating axios instance
const axiosInstance = axios.create({ baseURL: "https://api.github.com/" });

export default axiosInstance;
