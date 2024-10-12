import axios, { AxiosResponse } from 'axios';
import { apiConfig } from './config';
const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
});

//响应拦截器
instance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response) {
      const { status } = response;
      if (status >= 500) {
        //服务端出错
        console.log('服务端错误');
      } else if (status > 400) {
        //接口参数异常
        console.log('400');
      } else if (status > 300) {
        //登录信息过期
        console.log('300');
      } else {
        //其他报错异常
        console.log('其他报错');
      }
    } else {
      //网络异常
      console.log('网络异常');
    }
    return Promise.reject(error);
  }
);

export const request = (
  name: string,
  params: any
): Promise<AxiosResponse<any, any>> => {
  const api = (apiConfig as any)[name];

  const { path, method } = api;

  if (method === 'get') {
    return get(path, params);
  } else {
    return post(path, params);
  }
};

export const get = (
  url: string,
  params: any
): Promise<AxiosResponse<any, any>> => {
  console.log(params);

  return instance.get(url, {
    params: params,
  });
};

export const post = (
  url: string,
  params: any
): Promise<AxiosResponse<any, any>> => {
  return instance.post(url, params);
};
