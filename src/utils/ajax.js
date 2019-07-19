/**
 * 通用AJAX客户端
 */
import axios from 'axios';

const ajax = axios.create({
  timeout: 10000
});

ajax.interceptors.request.use((config) => {
  const newConf = { ...config };
  // 在这里做请求头定制处理
  return newConf;
});

ajax.interceptors.response.use((response) => {
  // 在这里可以对返回做统一错误拦截
  if (response.status !== 200) {
    return Promise.reject(`Http 状态异常 ${response.status}`);
  }
  if (response.data.status !== 0) {
    return Promise.reject(response.data.errorMessage);
  }
  return response.data;
}, (error) => {
  return Promise.reject(error);
});

export default ajax;
