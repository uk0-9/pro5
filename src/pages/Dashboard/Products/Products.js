import React, { useEffect, useState } from 'react';
import {CATEGORIES, CATEGORY, PRODUCT, PRODUCTS } from '../../../Api/Api'
import { Axios } from '../../../Api/Axios';
import Tableshow from '../Tableshow';
import { Form } from 'react-bootstrap';
export default function Products() { 
  //States
  const [Products,setProducts]=useState([])  
  console.log(Products)
  const [noProducts,setnoProducts]=useState(false)  
  const [refresh_Products,setrefresh_Products]=useState(false)
  const [limit,setlimit]=useState(10)
  const [page,setpage]=useState(1)
  const [total,settotal]=useState(0)
  const [loading,setloading]=useState(false)
  const [search,setsearch]=useState("")
// get ail usars 
  useEffect(()=>{
    setloading(true)
Axios.get(`/${PRODUCTS}?limit=${limit}&page=${page}`)
.then((se)=>{setProducts(se.data.data);settotal(se.data.total);})
.then(()=>setnoProducts(true))
.finally(()=>setloading(false))
.catch((err)=>console.log(err))
    },[refresh_Products,limit,page])
 
   // delet
 async  function delet_usars(id){
try{
const res = await Axios.delete(`/${PRODUCT}/${id}`)
setrefresh_Products((ke)=>!ke)
}
catch (err) {
  console.log(err);
} 
   }
   const header=[
    {
      key:"images",
      name:"images"
    },
    {
      key:"title",
      name:"Title"
    },
    {
      key:"description",
      name:"Description"
    },
    {
      key:"created_at",
      name:"created"
    },
    {
      key:"updated_at",
      name:"updated"
    },
    {
      key:"price",
      name:"Price"
    },
    {
      key:"rating",
      name:"Rating"
    },
   ]
   
  return (
    <>
    <div  className='table'>
    <Tableshow search_link={PRODUCT}  loading={loading} total={total} setpage={setpage} setlimit={setlimit} page={page} limit={limit} header={header} data={Products} delet={delet_usars}   nofaund1={noProducts} nofound2={"Products"}  />
    </div></>
  );
}
