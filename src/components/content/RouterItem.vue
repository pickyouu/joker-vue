<template>
  <div class="router-item" @click="itemClick">
    {{item}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      active:true
    }
  },
  props: {
    index:{
      default:0
    },
    item:{
      type:String,
      default:""
    },
    path:{
      type:String,
      default:"/cold-joke"
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
      this.$emit("getindex",this.index)
    }
  }
}
</script>

<style  scoped>
.router-item{
  
  padding: 10px;
  border-radius: 30px;
}

</style>

