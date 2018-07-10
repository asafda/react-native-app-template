// @flow
import axios from 'axios';
import config from '/config';
// import { logout } from '/redux/user/actions';
// import { get } from '/infra/utils';

const instance = axios.create({
  baseURL: config.api.url,
  timeout: config.api.timeout
});

instance.interceptors.request.use(
  config => {
    // TODO: after adding Redux, get token from store and add to API calls
    // const user = global.store.getState().user;
    // if (user && user.token) {
    //   config.headers.Authorization = user.token; // eslint-disable-line no-param-reassign
    // }
    return config;
  },
  error =>
    // Do something with request error
    new Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    // TODO: after adding Redux, add logout upon 401 responses
    // if (get(error, 'response.status') === 401 && error.config.url.slice(-10) !== '/auth/load') {
    //   global.store.dispatch(logout());
    // }
    return new Promise.reject(error.response);
  }
);

export default instance;
