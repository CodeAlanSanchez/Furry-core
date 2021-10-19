import axios from 'axios';

const api = process.env.API || 'http://localhost:3000/api';

export const fetchDogs = () => axios.get(`${api}/dogs`);
export const fetchCats = () => axios.get(`${api}/cats`);