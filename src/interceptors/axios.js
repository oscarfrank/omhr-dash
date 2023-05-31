import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5555/';
axios.defaults.withCredentials = true;

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {

    if (error.response.status === 401 && !refresh) {
        refresh = true;

        const {status, data:{token}} = await axios.post('users/refreshToken', {}, {
            withCredentials: true
        });

        if (status === 200) {
            const request = error.config;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            request.headers['Authorization'] = `Bearer ${token}`;
            // console.log(data.token+': refreshed the token');
            refresh = false;
            return axios(request); // Retry The Same Request
        }
    }
    return error;
});