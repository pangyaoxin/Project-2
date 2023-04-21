// 左边菜单
export default {
  state: {
  // 控制菜单的展开收缩
    isCollapse: false
  },
  // 控制菜单的展开收缩的方法
  mutations: {
    menuCollapse (state) {
      state.isCollapse = !state.isCollapse
    }
  }
}
