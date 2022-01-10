<template>
  <div id="show">
    
    

    <el-container>
      <el-aside width="70px"><Router class="router"/></el-aside>
      <el-main><div class="router-view"><router-view></router-view></div></el-main>
    </el-container>
  </div>
  
</template>

<script>
import Router from "./Router.vue"
export default {
  components: {
    Router
  }
}
</script>

<style scoped>

</style>