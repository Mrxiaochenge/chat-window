import http from './http.config';
/* api->index.js 统一命名规范
 * 1. 接口暴露前缀统一为req -> request(请求)
 * 2. 需详细描述数据时, 在src/types/response.d.ts中声明
 * Template: export const req[name] = () => http.get("/api/list")
 */

// 暴露请求配置
export const httpConfig = http.defaults;

// 登录
export const getUserInfo = (data: any) => {
  return http.post<UserInfo>('/login', data);
};
// register
// 模拟请求列表
export const getList = (params: ListOpts) => {
  return http.get('/list', { params });
};
