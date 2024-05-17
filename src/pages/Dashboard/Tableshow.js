import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead ,} from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import PaginatedItems from './paginate'
import Form from 'react-bootstrap/Form';
export default function Tableshow(pro) {
  const [refresh_usars,setrefresh_usars]=useState(false)
  const yor_user=pro.yor_user||false
  // limit data for not get ali data for one taime
  
  const start =(pro.page-1)*pro.limit
  const end= Number(start)+Number(pro.limit)
  // const finle =pro.data.slice(start,end)
  // ازلت ال اسلايد عشان ادا خليته مراح يعرض الصفخة الثانية و السبب مو عارف و هو ازالها في الحلقه 238
  // طبها حولناها هنا نمبر عشان الفاليو لما يجي من ال اوبشن يكون استرنق و استرنق بلس نمبر يخليه يجيب كل العناصر ف نحولها نمبر 
  const finle=pro.data 
   const [search,setsearch]=useState("")
  const felter_data=finle.filter((items)=>items[pro.search].toLowerCase().includes(search.toLowerCase()))
// it is includes for search or filter mepe like thes it is for vedue Number 239 and i use items[pro.search] aru no for wite i use tihs becus i sienc it is for index i am no it use tish for vedue Number 240
  function Handil_search(e) {
    setsearch(e.target.value)
  }

  
 


// header show
  const headershow=pro.header.map((item,key)=>(
    <th key={key} className='t' scope='col'>{item.name}</th>
  ))

// body show

  const datashow=felter_data.map((item,key)=>(
    <tr key={key}>
      <td className='t'><p className='text-muted fw-bold mb-0'>{item.id}</p></td>
      {
        pro.header.map((item2,key2)=>(
          <td key={key2} className='t'><p className="text-muted fw-bold mb-0">
            {
              item2.key === "image" ?
                <img src={item[item2.key]} alt="" className="imgcard-Categories-page" /> :

              item2.key === "images" ?
                <div className='imgcard-Products-page gap-2 col-10 '>
                  {item[item2.key]?.map((images, key) => (
                    <img key={key} src={images?.image} alt="img" width="50px" className="    col-lg-3   col-xl-2  col-xxl-2 col-xxxl-2    " />
                  ))}
                </div> :
              item[item2.key] === "1995" ?
                "Admin" :
              item[item2.key] === "2001" ?
                "User" :
              item[item2.key] === "1996" ?
                "Writer" :
              item[item2.key] === "1999" ?
                "Product Manger" :
                item[item2.key]
            }
            {yor_user && item[item2.key] === yor_user.name && ":(You)"}
          </p></td>
        ))
      }
      <td className='t'>
        <Link to={`${item.id}`}><MDBBadge color='success' pill>
          <i className="fa-solid fa-user-pen   text-light   cursor"></i>
        </MDBBadge></Link>
      </td>
      {yor_user.id !== item.id ? (
        <>
          <td className='t'>
            <MDBBadge color='danger' pill onClick={() => { pro.delet(item.id) }}>
              <i className="fa-solid fa-user-xmark  cursor"></i>
            </MDBBadge>
          </td>
        </>
      ) : (
        <td className='t'>
          <MDBBadge color='danger' pill >
            No
          </MDBBadge>
        </td>
      )}
    </tr>
  ))



  return (
    <>
    <div  className='table'>
        <div className=" col-4 m-1"   >
      <Form.Control
                   
                   onChange={Handil_search}
                   id='gg'
                    type="search"
                    className=" my-2 search  bg-body-secondary "
                    placeholder='search 🔎'
                  
                  />
                  
                  </div>
      <MDBTable align='middle'className=' w-100' >
        <MDBTableHead >
          <tr>
            <th className='t' scope='col'>Id</th>
            {headershow}
            <th className='t' scope='col'>Updated</th>
            <th className='t' scope='col'>Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {pro.loading  ? (
            <tr>
              <td colSpan={12} className='text-center fa-2x text-dark'>
                <img src={require('../../imgs/3oEjI6SIIHBdRxXI40.webp')} alt="" />
              </td>
            </tr>
          ) : datashow.length <= 0 && pro.nofaund1 === true ? (
            <tr>
              <td colSpan={12} className='text-center fa-3x text-dark'>
                No {pro.nofound2} found
              </td>
            </tr>
          ) : (
            datashow
          )}
        </MDBTableBody>
      </MDBTable>

<div className=' d-flex  align-items-center justify-content-end  flex-wrap  '>
   <div className=' col-1  mb-2 '>
         <Form.Select onChange={(e)=>pro.setlimit(e.target.value)} aria-label="Default select example">
         <option value="10">10</option>
         <option value="15">15</option>
         <option value="20">20</option>
         <option value="25">25</option>
         <option value="30">30</option>
       </Form.Select>
   </div>
  
        <PaginatedItems total={pro.total} setpage={pro.setpage} itemsPerPage={pro.limit} data={pro.data}/>
  
</div>
      </div>
    </>
  )
}
