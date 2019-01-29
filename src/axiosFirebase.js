import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://alternative-medicine-29c43.firebaseio.com/'
});

export default instance;