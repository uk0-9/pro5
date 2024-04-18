import axios from "axios";
import cookie from 'cookie-universal'
import {BASEURL} from './Api'
const cookies=cookie()
const get_token= cookies.get("Bearer")
export const Axios=axios.create({
    baseURL:BASEURL,
   headers:{
      authorization: "Bearer "+get_token,
    }
})