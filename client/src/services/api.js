// client/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust if your backend URL is different
  withCredentials: true,                // needed if you're using cookies/sessions
});

export default api;
