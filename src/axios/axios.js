import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.0.100:3006/api/v1/'
});

export default instance