import React, { useContext, useEffect, useState } from 'react';
import {USER, USERS } from '../../../Api/Api'
import { Axios } from '../../../Api/Axios';
import { Usar } from '../../../context/usar';
import Tableshow from '../Tableshow';
export default function Users() { 
  //States
  const [users,setusers]=useState([])  
  const [nousers,setnousers]=useState(false)  
  const [refresh_usars,setrefresh_usars]=useState(false)
  const [limit,setlimit]=useState(3)
  const [page,setpage]=useState(1)
  const [total,settotal]=useState(0)
  const [loading,setloading]=useState(false)
// get your usar 
const usar =useContext(Usar)
const usar_data = usar.usar_data
// get ail usars 
const [dont_show_yor_user,setdont_show_yor_user]=useState(usar_data) 
// get ail usars 
  useEffect(()=>{
    setloading(true)
Axios.get(`/${USERS}?limit=${limit}&page=${page}`)
.then((se)=>{setusers(se.data.data);settotal(se.data.total);})
.then(()=>setnousers(true))
.finally(()=>setloading(false))
.catch((err)=>console.log(err))
    },[refresh_usars,limit,page])
 
// filter users
    // const users_filter=users.filter((users)=>users.id!==dont_show_yor_user.id)
    // هذا الحين اسو فيلتر لي البيانات و افلتر البيانات يلي ما ابيها تنعرض و اقو له سوي لي اليوزرز فلتر و رجع لي كل اليوزرز و جيب كل اليوزرز و ال اي دي لا يساوي الثاني انه بس فلتر الي لا يساوي حلقه 154
   // delet
  async  function delet_usars(id){
    try{
    const res = await Axios.delete(`/${USER}/${id}`)
       setrefresh_usars((ke)=>!ke)
    }
    catch (err) {
      console.log(err);
    }
  
       }
   
   const header=[
    {
      key:"name",
      name:"Name"
    },
    {
      key:"email",
      name:"Email"
    },
    {
      key:"role",
      name:"Role"
    },
   ]
  return (
    <Tableshow search={"name"} loading={loading} total={total} setpage={setpage} setlimit={setlimit} page={page} limit={limit} header={header} data={users} delet={delet_usars} yor_user={dont_show_yor_user} nofaund1={nousers} nofound2={"Users"} />
  
  );
}
