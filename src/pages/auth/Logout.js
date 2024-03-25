import { LOGOUT } from '../../Api/Api'
import cookie from 'cookie-universal'
import { Axios } from '../../Api/Axios'
export default function Logout() {
    const cookies=cookie()  
async function logout(){
    try{
const res= await Axios.get(`/${LOGOUT}`)
      console.log(res)
      cookies.remove("Bearer")
      window.location.pathname="/"
}

catch(err){
console.log(err)
}
}
  return (
    <button onClick={logout}>Logout</button>
  )
}
