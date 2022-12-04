/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-10-14 11:54:15
 * @LastEditTime: 2020-12-08 16:57:02
 * @Description: 全局接口配置, axios文档: https://www.kancloud.cn/yunye/axios/234845
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { default as http } from 'axios';

/** 定义默认配置 */
http.defaults.baseURL = '';
http.defaults.headers.common = {};

/** 添加请求拦截器 */
http.interceptors.request.use(config => {
  if (config.custom?.load) {
    throw new Error('错误!, 加载并未实现!');
  }
  return config;
});

/** 添加响应拦截器 */
http.interceptors.response.use(
  response => {
    if (response.config.custom?.load) {
      throw new Error('错误!, 加载并未实现!');
    }
    return response;
  },
  error => {
    if (error.config.custom?.load) {
      throw new Error('错误!, 加载并未实现!');
    }
    return Promise.reject(error);
  }
);

export default http;
