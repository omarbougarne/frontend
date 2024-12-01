import axios from 'axios';

const API_URL = 'http://localhost:5000/auth'


export const signUp = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};


export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials); 
    return response.data;
};
