import { request } from "./request";

export default  function detail(type,id){
  return request({
    url:"/detail",
    params:{
      type,
      id
    }
  })
}