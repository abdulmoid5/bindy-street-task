import Axios from 'axios';
import {appConfig} from '~/config/envConfig';

Axios.interceptors.request.use(
  config => {
    config.baseURL = appConfig.apiURL;
    config.withCredentials = false;
    return config;
  },
  error => {
    return Promise.reject(error.response ? error.request : error);
  },
);

Axios.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);
export default Axios;
