<template>
  <Scroll class="scroll">
    <div v-if='joke'>
    <h2>{{joke.title}}</h2>
    <div v-html="joke.content">
     
    </div>
    
    <el-button class="next" round @click="btnClick">next</el-button>
  </div>
  <div v-else style="marginTop:30px">
    我是有底线的(●'◡'●)<br/>
    (该类笑话没有啦)
    </div>
  </Scroll>
</template>

<script>
import detail from "@/network/detail"
import Scroll from "components/common/Scroll"
export default {
  data () {
    return {
      joke:{},
      id:1,
      type:null
    }
  },
  mounted () {
    
    const {id,type}=this.$route.query
    this.id=id
    this.type = type
    detail(type,id).then(res=>{
      this.joke = res.data.joke[0]
      
    })
  },
  methods: {
    btnClick(){
      this.id=this.id*1+1
      detail(this.type,this.id).then(res=>{
      this.joke = res.data.joke[0]
    })
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped>
.next{
  position: absolute;
  right: 30px;
  margin-top: 30px;
}
.scroll{
  position: absolute;
  top:8vh;
  left:100px;
  right:0px;
  bottom: 0px;
  overflow: hidden;
}
</style>