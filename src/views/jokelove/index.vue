<template>
  <div id="coldjoke">
    <Scroll class="scroll" :PullUpLoad=true  @UpLoadMore="UpLoadMore" ref="scroll">
      <TitleList :titles="titleList" joketype="jokelove"/>
    </Scroll>
  </div>
</template>

<script>
import {getJokes} from "@/network/getJokes.js"
import TitleList from "components/content/TitleList"
import Scroll from "components/common/Scroll"
export default {
  data () {
    return {
      titleList:[],
      page:1
    }
  },
  mounted () {
    getJokes("jokelove",this.page)
    .then((res)=>{this.titleList=res.data.jokes},(err)=>{console.log(err);})
  },
  components: {
    TitleList,
    Scroll
  },
  methods: {
    UpLoadMore(){
      //请求下一页数据
      this.page +=1
      getJokes("jokelove",this.page)
      .then((res)=>{
        if(res.data.jokes.length!=0){
          
          res.data.jokes.forEach(item=>{
            this.titleList.push(item)
          })
        }
        
        this.$refs.scroll.scroll.finishPullUp()
        this.$refs.scroll.scroll.refresh()
      },(err)=>{console.log(err);})
      
    }
  }
}
</script>

<style scoped>



.scroll{
  position: absolute;
  top: 8vh;
  bottom: 0px;
  right: 0px;
  left: 100px;
  overflow: hidden;
}
</style>

