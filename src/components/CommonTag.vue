<template>
  <div class="tags">
    <el-tag v-for="item in tags" :key="item.name" :closable="item.name !== 'home'? true : false "
    :effect="$route.path === item.path? 'dark' : 'plain' " style="margin-left: 20px;"
    @close="tagsDelete(item)">
    {{ item.label }}
  </el-tag>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  computed: {
    tags () {
      return this.$store.state.tab.tabsList
    }
  },
  methods: {
    tagsDelete (value) {
      this.$store.commit('tagsDelete', value)
      const index = (this.$store.state.tab.tabsList.length) - 1
      console.log(index)
      this.$router.push(this.$store.state.tab.tabsList[index].path)
    }
  }
}
</script>
<style scoped>
.tags {
  margin-top: 20px;
}
</style>
