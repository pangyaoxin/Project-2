import http from '@/utils/request'

// 请求首页的数据
export const getData = () => {
  // 返回一个promise 对象
  return http.get('/home/getData')
}

// 请求用户的数据
export const getUser = (params) => {
  // 返回一个用户列表
  return http.get('/user/getUser', params)
}

export const addUser = (data) => {
  return http.post('/user/add', data)
}

export const editUser = (data) => {
  return http.post('/user/edit', data)
}

export const delUser = (data) => {
  return http.post('/user/del', data)
}
