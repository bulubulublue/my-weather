import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.responseType = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.response.use(
  response => {
    const { data } = response as AxiosResponse;
    const { status } = data;
    if (status && status !== 'OK') {
      return Promise.reject('Network Error');
    }

    return response;
  },
  e => {
    return Promise.reject(e);
  }
);

export const request = <T = unknown>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .request<T>(config)
      .then(res => {
        if (res && res.data) {
          resolve(res.data);
        }
      })
      .catch(err => reject(err));
  });
};
