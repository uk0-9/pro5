import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead ,} from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import PaginatedItems from './paginate'
import Form from 'react-bootstrap/Form';
import { Axios } from '../../Api/Axios';
import TransformDate from '../../helpers/TransformDate';
export default function Tableshow(pro) {
  const [refresh_usars,setrefresh_usars]=useState(false)
  const yor_user=pro.yor_user||false
  // search value
  const [search,setsearch]=useState("")
  console.log(search)
  const [Date,setDate]=useState("")
  console.log(Date)
  // search data 
  const [felter_Date,setfelter_Date]=useState([])
  console.log(felter_Date)
  // loading in you search
  const [search_loading,setsearch_loading]=useState(false)
  //dont show notfunde in you search
  const [donst_show_nofunde,setdonst_show_nofunde]=useState(false)
  // pagenate sarch and dont get mor page pagenate and dont show semsem data in ail page 
   const start =(pro.page-1)*pro.limit
    const end= Number(start)+Number(pro.limit)
    const finle_slics_search_for_pagenat=felter_Date.slice(start,end) 
   
    const felter_data_bydata = pro.data.filter((items)=>items["created_at"]?.includes(Date));

    const filter_searc_hByDate=felter_Date.filter((items)=>items["created_at"]?.includes(Date)) ;


  // show_aildata show search data and ail data 
  const show_aildata=(Date.length!==0? (search.length>0?filter_searc_hByDate:felter_data_bydata):(search.length>0?finle_slics_search_for_pagenat:pro.data))

  
 



 

  

// search form for back end  
async function search_bakend (){
  
  try{
    const res = await Axios.post(`/${pro.search_link}/search?title=${search}`)    
    setfelter_Date(res.data)
    
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setsearch_loading(false);
      setdonst_show_nofunde(true)
    }
}
// dont search and you writing and you dane send for 1s
useEffect(()=>{ 
  const time= setTimeout(() => {
   search.length>0? search_bakend():setsearch_loading(false)
  }, 500);
return()=>{clearTimeout(time)}
},[search])
  
 
 

// header show
  const headershow=pro.header.map((item,key)=>(
    <th key={key} className='t' scope='col'>{item.name}</th>
  ))

// body show

  const datashow=show_aildata.map((item,key)=>(
    <tr key={key}>
      <td className='t'><p className='text-muted fw-bold mb-0'>{item.id}</p></td>
      {
        pro.header.map((item2,key2)=>(
          <td key={key2} className='t'><p className="text-muted fw-bold mb-0">
            {
              item2.key === "image" ?
                <img src={item[item2.key]} alt="" className="imgcard-Categories-page" /> :

              item2.key === "images" ?
                <span className='imgcard-Products-page gap-2 col-10 '>
                  {item[item2.key]?.map((images, key) => (
                    <img key={key} src={images?.image} alt="img" width="50px" className="    col-lg-3   col-xl-2  col-xxl-2 col-xxxl-2    " />
                  ))}
                </span> :
                item2.key ==="created_at"||item2.key ==="updated_at"?
                TransformDate(item[item2.key]):
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
    <div  className=''>
    <div className=" col-4 m-1"   >
      <Form.Control
                   
                   onChange={(e)=>{setsearch(e.target.value);setsearch_loading(true);}}
                   
                   id='gg'
                    type="search"
                    className=" my-2 search  bg-body-secondary "
                    placeholder='search 🔎'
                  
                  />
                  
                  </div>
    <div className=" col-4 m-1"   >
      <Form.Control
                   
                   onChange={(e)=>{setDate(e.target.value);}}
                   
                   id='gg'
                    type="date"
                    className=" my-2 search  bg-body-secondary "
                    placeholder='Date 🔎'
                  
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
        {pro.loading || search_loading ? (
  <tr>
    <td colSpan={12} className="text-center fa-2x text-dark">
      <img src={require('../../imgs/Lodeng.webp')} alt="" />
    </td>
  </tr>
) : (datashow.length <= 0 && pro.nofaund1 === true && show_aildata.length <= 0 ) ? (
  donst_show_nofunde&&
  <tr>
    <td colSpan={12} className="text-center fa-3x text-dark">
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
  
        <PaginatedItems total={pro.total} total_saech={felter_Date.length} setpage={pro.setpage} itemsPerPage={pro.limit} data={pro.data}/>
  
</div>
      </div>
    </>
  )
}



 //search on front ind in dont back-end
  // const finle=pro.data 
  // ازلت ال اسلايد عشان ادا خليته مراح يعرض الصفخة الثانية و السبب مو عارف و هو ازالها في الحلقه 238
  // طبها حولناها هنا نمبر عشان الفاليو لما يجي من ال اوبشن يكون استرنق و استرنق بلس نمبر يخليه يجيب كل العناصر ف نحولها نمبر 
  // const felter_data=finle.filter((items)=>items[pro.search].toLowerCase().includes(search.toLowerCase()))
  // it is includes for search or filter mepe like thes it is for vedue number 239 and i use items[pro.search] aru no for wite i use tihs becus i sienc it is for index i am no it use tish for vedue Number 240
  // function Handil_search(e) {
  //   setsearch(e.target.value)
  // }
  // const felter_data_bydata = pro.data.filter((items) => items["created_at"]===(Date));
  // const filter_searchByDate=felter_Date.filter((item)=>item["created_at"]===(Date)) ;