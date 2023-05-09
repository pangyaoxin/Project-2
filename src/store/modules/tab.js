// 左边菜单
export default {
  state: {
  // 控制菜单的展开收缩
    isCollapse: false,
    // 面包屑的数据
    tabsList: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ]
  },
  // 控制菜单的展开收缩的方法
  mutations: {
    menuCollapse (state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu (state, value) {
      // findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。
      if (value.name !== 'home') {
        const index = state.tabsList.findIndex(item => item.name === value.name)
        if (index === -1) {
          state.tabsList.push(value)
        }
      }
      console.log(state.tabsList)
    },
    // 点击删除标签tag
    tagsDelete (state, value) {
      const index = state.tabsList.findIndex(item => item.name === value.name)
      state.tabsList.splice(index, 1)
    }
  }
}
