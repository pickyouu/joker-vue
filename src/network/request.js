import axios from "axios"

export function request(config){
  const instance = axios.create({
    baseURL:'http://149.28.199.77:5300/',
    timeout:8000
  })
  
  return instance(config)
}
