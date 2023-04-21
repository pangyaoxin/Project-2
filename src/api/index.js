import http from '@/utils/request'

// 请求首页的数据
export const getData = () => {
  // 返回一个promise 对象
  return http.get('/home/getData')
}
