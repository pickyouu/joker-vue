import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

const ColdJoke = ()=> import("views/coldJoke")
const FunnySentence =()=> import("views/funnySentence")
const HilariousReply = ()=> import("views/hilariousReply")
const JokeCareer =()=>import("views/jokecareer")
const JokeChild = ()=>import("views/jokechild")
const JokeEglish = ()=>import("views/jokeeglish")
const JokeFamily =()=>import("views/jokefamily")
const JokeLove =()=>import("views/jokelove")
const JokeSchool=()=>import("views/jokeschool")
const DetailJoke=()=>import("views/DetailJoke")

const routes=[
  {
    path:"",
    redirect: '/cold-joke'
  },
  {
    path:"/cold-joke",
    component:ColdJoke
  },
  {
    path:"/funny-sentence",
    component:FunnySentence
  },
  {
    path:"/hilarious-reply",
    component:HilariousReply
  },
  {
    path:"/joke-career",
    component:JokeCareer
  },
  {
    path:"/joke-child",
    component:JokeChild
  },
  {
    path:"/joke-eglish",
    component:JokeEglish
  },
  {
    path:"/joke-family",
    component:JokeFamily
  },
  {
    path:"/joke-love",
    component:JokeLove
  },
  {
    path:"/joke-school",
    component:JokeSchool
  },{
    path:"/detail-joke",
    component:DetailJoke
  }
]
export default new Router({
  // mode:"history",
  routes
})

