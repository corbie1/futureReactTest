import {ApiEndpoint} from '../config/api-endpoints';
import {ActionCreator} from '../store/actions';
import {history} from '../history';
import {createAPI} from './api';
import routeConfig from '../config/routes';

const api = createAPI(() => history.push(routeConfig.INDEX));


export const Operation = {
  
};
