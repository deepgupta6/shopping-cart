import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `${localStorage.getItem('token')}`;
    }
    return req;
});

export const createUser = (userData) => API.post('/users', userData);
export const login = (formData) => API.post('/users/login', formData);
export const getItems = () => API.get('/items');
export const getCarts = () => API.get('/carts');
export const createCart = (cartData) => API.post('/carts', cartData);
export const getOrders = () => API.get('/orders');
export const createOrder = (orderData) => API.post('/orders', orderData);