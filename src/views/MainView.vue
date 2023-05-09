<template>
    <div class="mainView">
        <el-container>
            <el-aside width="auto">
              <common-aside></common-aside>
            </el-aside>
            <el-container>
              <el-header>
                <common-header></common-header>
              </el-header>
              <common-tag></common-tag>
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
import CommonTag from '../components/CommonTag.vue'

export default {
  name: 'mainView',
  components: {
    CommonAside,
    RouterView,
    CommonHeader,
    CommonTag
  }
}
</script>
<style scoped>
.el-header{
  padding: 0;
}
</style>
