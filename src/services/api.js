import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-coffee-order.herokuapp.com',
});

export default api;