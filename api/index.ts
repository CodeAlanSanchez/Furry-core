import axios from 'axios';

const { API_URL } = process.env;

export const fetchDogs = () => axios.get(`${API_URL}/api/breeds/image/random`);
export const fetchCats = () => axios.get(`${API_URL}/cats`);