import React, { useEffect, useState } from 'react';
import {CATEGORIES, CATEGORY } from '../../../Api/Api'
import { Axios } from '../../../Api/Axios';
import Tableshow from '../Tableshow'
import { Form } from 'react-bootstrap';
export default function Categories() { 
  //States
  const [categories,setcategories]=useState([])  
  const [nocategories,setnocategories]=useState(false)  
  const [refresh_categories,setrefresh_categories]=useState(false)
  const [limit,setlimit]=useState(10)
  const [page,setpage]=useState(1)
  const [total,settotal]=useState(0)
  const [loading,setloading]=useState(false)

// get ail Categories 
useEffect(()=>{
  setloading(true)
   Axios.get(`/${CATEGORIES}?limit=${limit}&page=${page}`)
  .then((se)=>{setcategories(se.data.data);settotal(se.data.total);})
  .then(()=>setnocategories(true))
  .finally(()=>setloading(false))
  .catch((err)=>console.log(err))
      },[refresh_categories,limit,page])

// delet
 async  function delet_usars(id){
try{
const res = await Axios.delete(`/${CATEGORY}/${id}`)
setrefresh_categories((ke)=>!ke)
}
catch (err) {
  console.log(err);
} 
   }

   const header=[
    {
      key:"title",
      name:"Title"
    },
    {
      key:"image",
      name:"Img"
    },
    {
      key:"created_at",
      name:"created"
    },
    {
      key:"updated_at",
      name:"updated"
    },
   ]
    
  return (
    <div  className='table'>
    <Tableshow search_link={CATEGORY}  loading={loading} total={total} setpage={setpage} setlimit={setlimit} page={page} limit={limit} header={header} data={categories} delet={delet_usars}   nofaund1={nocategories} nofound2={"Categories"} />
    </div>
  );
}




// async function fetchData() {
//   try {
//     const response = await Axios.get(`/${CATEGORIES}limit=5&&page=2`);
//     setcategories(response.data);
//   await  setnocategories(true);
//   } catch (error) {
//     console.log(error);
//   }
// }

// useEffect(() => {
//   fetchData();
// }, [refresh_categories]);
