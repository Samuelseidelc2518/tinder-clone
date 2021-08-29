import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-forsamuel.herokuapp.com'
});

export default instance;