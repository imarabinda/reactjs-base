import axios from 'axios';
import { API_URL} from '../configs/api';

const request = axios.create();
const isLoggedIn =false;


request.interceptors.request.use(
    config => {
        config.baseURL = API_URL;
        
        const url = config.url; 
        // config.headers = {
        //     Authorization: `Bearer ${isLoggedIn ? isLoggedIn : GUEST_TOKEN}`
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

request.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return Promise.reject(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            return Promise.reject(error);
        }
    },
);

// request.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

export default request;