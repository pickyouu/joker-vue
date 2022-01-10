<template>
    <el-container>
      <el-header><Header/></el-header>
      <el-main><Show/></el-main>
    </el-container>
</template>
<script>
import Header from "components/content/Header"
import Show from "components/content/Show"
  export default {
    components: {
      Header,
      Show
    }
  }
</script>
<style>
 @import url('./assets/css/base.css');
 *{
   user-select: auto;
 }
</style>
