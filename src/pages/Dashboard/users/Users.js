import React, { useEffect, useState } from 'react';
import { MDBBadge,  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import {USER, USERS } from '../../../Api/Api'
import { Link} from 'react-router-dom';
import { Axios } from '../../../Api/Axios';
import Loading from '../../../components/website/Loading';
export default function Users() { 
  //States
  const [users,setusers]=useState([])  
  const [nousers,setnousers]=useState(false)  
  const [dont_show_yor_user,setdont_show_yor_user]=useState("")  
  const [refresh_usars,setrefresh_usars]=useState(false)
// get your usar 
useEffect(()=>{
Axios.get(`/${USER}`)
.then((se)=>setdont_show_yor_user(se.data))
.catch((err)=>console.log(err))
},[])

// get ail usars 
  useEffect(()=>{
Axios.get(`/${USERS}`)
.then((se)=>setusers(se.data))
.then(()=>setnousers(true))
.catch((err)=>console.log(err))
    },[refresh_usars])
 






// filter users
    // const users_filter=users.filter((users)=>users.id!==dont_show_yor_user.id)
    // هذا الحين اسو فيلتر لي البيانات و افلتر البيانات يلي ما ابيها تنعرض و اقو له سوي لي اليوزرز فلتر و رجع لي كل اليوزرز و جيب كل اليوزرز و ال اي دي لا يساوي الثاني انه بس فلتر الي لا يساوي حلقه 154
   

     const show_usars=users.map((usars,index)=>
    <tr key={index}>
    {/* <td className=' ' style={{marginRight:"0px",width:"0px",height:"40px"}}> */}

    <td className='t' style={{height:"40px"}}>
         <p className='fw-bold text-muted '>{usars.id}</p>
    </td>
    <td className='t'>
          <p className='fw-bold text-muted mb-0'>{usars.name===dont_show_yor_user.name?usars.name+":(You)":usars.name}</p>
    </td>
    <td className='t'>
    <p className='text-muted fw-bold mb-0'>{usars.email}</p>
    </td>
    <td className='t'>
    <p className='text-muted fw-bold mb-0'>{usars.role==="1995"?"Admin":usars.role==="2001"?"User":usars.role==="1996"?"Writer":"Non"}</p>
    </td>
   
   
    <td className='t'>
    <Link to={`${usars.id}`}><MDBBadge color='success' pill>
      <i className="fa-solid fa-user-pen   text-light   cursor"></i>
      </MDBBadge></Link>
      </td>{dont_show_yor_user.id!==usars.id? <>
    <td className='t'>
      <MDBBadge color='danger' pill onClick={()=>{delet_usars(usars.id)}}>
      <i  className="fa-solid fa-user-xmark  cursor"></i>     
     </MDBBadge>
    </td>
     </>
     :
     <td className='t'>
     <MDBBadge color='danger' pill >
    No   
    </MDBBadge>
   </td>
     } 
  </tr>
   )
   // delet_usars
 async  function delet_usars(id){
  if(dont_show_yor_user.id!==id){
try{
const res = await Axios.delete(`/${USER}/${id}`)
  setrefresh_usars((ke)=>!ke)
}
catch (err) {
  console.log(err);
} }

   }

   
    
  return (
    <>
    <MDBTable align='middle' className='table'>
      <MDBTableHead>
        <tr>
          <th className='t' scope='col'>Id</th>
          <th className='t' scope='col'>Name</th>
          <th className='t' scope='col'>Email</th>
          <th className='t' scope='col'>Role</th>
          <th className='t' scope='col'>Updated</th>
          <th className='t' scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
      {users.length===0?<tr><td colSpan={12} className='text-center fa-2x text-dark'><div>Loading...</div></td></tr>:users.length<=0&&nousers===true?<tr><td colSpan={12} className='text-center fa-3x text-dark'>No users found</td></tr>:show_usars}
      
      </MDBTableBody>
    </MDBTable>
    </>
  );
}
