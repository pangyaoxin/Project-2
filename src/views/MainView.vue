<template>
    <div class="mainView">
        <el-container>
            <el-aside width="200px">
              <common-aside></common-aside>
            </el-aside>
            <el-container>
              <el-header>
                <common-header></common-header>
              </el-header>
              <el-main>
                <RouterView></RouterView>
              </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import { RouterView } from 'vue-router'
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'

export default {
  name: 'mainView',
  components: {
    CommonAside,
    RouterView,
    CommonHeader
  }
}
</script>
<style scoped>
.el-header{
  padding: 0;
}
</style>
