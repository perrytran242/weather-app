import axios from 'axios';

const API_KEY = 'e5080f5976f9d5e73927c02ac1e9fc6c';

export default axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather`,
    params : {
        APPID: API_KEY
    }
});

