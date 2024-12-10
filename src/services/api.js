import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rodud-backend.test/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export default api;