import { request } from "./request";

export function getJokes(type,page){
  return request({
    url:"/getjoke",
    params:{
      type,
      page
    }
  })
}