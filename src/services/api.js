import axios from 'axios';

const api = axios.create({
    baseURL: 'http://aircnc97.herokuapp.com'
});

export default api;