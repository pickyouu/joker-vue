<template>
  <div>
    <div v-if="titles.length">
    <div :key="item.id+item.title" v-for="item in titles" class="title" @click="itemClick(item.id)">
      {{item.title}}
    </div>
  </div>
  <div v-else>loading...</div>
  </div>
</template>

<script>

export default {
  props: {
    titles:{
      type:Array,
      default:[]
    },
    joketype:{
      default:"cold_joke"
    }
  },
  methods: {
    itemClick(id){
      let iid=id
      this.$router.push({
        path:"/detail-joke",
        query:{
          type:this.joketype,
          id:iid
        }
      })
    }
  }
}
</script>

<style scoped>
  .title{
    padding: 10px;
    box-shadow: 0 1px 1px #bbb;
  }
</style>