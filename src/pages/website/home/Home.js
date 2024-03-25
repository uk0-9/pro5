
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
 
//   const [form,setform]=useState({
// name:"",
// email:"",
// password:"",
// password2:"",

//   })
//   console.log(form)
//   function onChanget(e){
// setform({...form,[e.target.name]: e.target.value })
//   }
  return (<>
 <Link to="/dashboard/users"><button >users</button></Link>
 <Link to="/dashboard"><button >dashboard</button></Link>
<div className="App">
home
</div>
</>
  );
}
