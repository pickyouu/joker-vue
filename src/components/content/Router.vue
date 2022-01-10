<template>
  <div id="router">
    <slot>
      <div v-for="(item,index) in datas" :key="item.item">
        <router-item :class="{active:index===curIndex}" :item="item.item" :path="item.path" :index="index" @getindex="getindex" />
      </div>
     
      
    </slot>
  </div>
</template>

<script>
import RouterItem from "./RouterItem.vue"
export default 
{
  data () {
    return {
      curIndex:0,
      datas:[
        {item:"冷笑话",path:"/cold-joke"},
        {item:"句子",path:"/funny-sentence"},
        {item:"神回复",path:"/hilarious-reply"},
        {item:"职场",path:"/joke-career"},
        {item:"儿童",path:"/joke-child"},
        {item:"英语",path:"/joke-eglish"},
        {item:"家庭",path:"/joke-family"},
        {item:"爱情",path:"/joke-love"},
        {item:"校园",path:"/joke-school"},
      ]
    }
  },
  components: {
    RouterItem
  },
  methods: {
    getindex(index){
      console.log(index);
      this.curIndex=index
    }
  }
}
</script>

<style scoped>
  .active{
    background-color: rgb(245, 242, 215);
  }
</style>
