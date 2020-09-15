import axios, {AxiosInstance} from 'axios'; // eslint-disable-line

import {StatusCode} from '../config/status-codes';
import routeConfig from '../config/routes';
import {ApiEndpoint} from '../config/api-endpoints';

export const createAPI = (onLoginFail = null) => {
    const api = axios.create({
      baseURL: ApiEndpoint.BASE_URL,
    });
  
    const onSuccess = (response) => response;
  
    const onFail = (err) => {
      if (err.response.request &&
        err.response.request.responseURL.indexOf(routeConfig.SIGN_IN) === -1 &&
        err.response.status === StatusCode.FORBIDDEN) {
        if(onLoginFail) onLoginFail();
      }
  
      throw err;
    };
  
    api.interceptors.response.use(onSuccess, onFail);
  
    return api;
  };
export default createAPI;
