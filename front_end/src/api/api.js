import axios from 'axios';
import Cookie from 'js-cookie'
const API = axios.create({
  baseURL: 'http://127.0.0.1:7000/api/v1',
});
API.interceptors.request.use(
  req =>{
    console.log(req);
    req.headers.authorization =`Bearer ${Cookie.get('token')}`;
    return req
  },err =>{
    console.log(err);
    return  Promise.reject(err)
  }
);
API.interceptors.response.use(
  res => {
    console.log(res)
    return res;
  
},err=>{
   console.log(err);
})
export default API;
