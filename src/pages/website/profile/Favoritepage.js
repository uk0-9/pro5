import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Favorite } from '../../../context/Favorite_context';
import { Cart } from '../../../context/Cart_context';
import { Carousel, CarouselItem, Image } from 'react-bootstrap';
export default function Favoritepage(pro) {
  const Favorite2 =useContext(Favorite)
  const remove_Favorite=(item)=>{Favorite2.removeFromFavorite(item)}
  const cart =useContext(Cart)
const add_cart=(pro)=>{cart.addToCart(pro)}
  // const [remove_clik,setremove_clik]=useState(false)
// const [item,setitem]=useState()
//   useEffect(()=>{
//   console.log(item)
//   setitem(localStorage.getItem("favoriteItems"))
//   },[remove_cart])
const show_Favorite=Favorite2.favoriteItems.map((item,key)=>{
  return(
  <div className="col-6 col-lg-2 col-md-4" key={key}>
<Link className='  text-decoration-none' to={item.id}>
<div className="card border-light">
{item.images && item.images.length > 0 ? (
          <Carousel>
            {item.images.map((imageObj, index) => (
              <CarouselItem key={index}>
                <Image src={imageObj.image} alt={pro.title} className="w-100" style={{ height: "150px" }} />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          <Image src={require("../../../imgs/cart.png")} alt={pro.title} className="w-100" style={{ height: "140px" }} />
        )}
<div className="card-footer border-top border-light p-4">
  <p href="#" className="h5 text-decoration-none text-truncate">{item.title}</p>
  <div className="d-flex align-items-center justify-content-between">
    <span className="badge bg-secondary badge-pill badge-gray ml-2 me-3"><i className="star fas fa-star text-warning mr-1" />{item.rating}</span>
    <span className="h5 mb-0 text-gray">${item.price}</span>
  </div>
  <div className=" d-flex align-items-center justify-content-between mt-3 ">
    <button className='btn  btn-primary w-100'onClick={(e) =>{e.preventDefault();remove_Favorite(item)}}>
    <Image src={require("../../../imgs/تصميم_بدون_عنوان__1_-removebg-preview.png")} alt="Favorite" width="25px"height="25px"   />
    </button>
    {/* {remove_clik ?
      <button className='btn  btn-primary w-100'onClick={(e) =>{ e.preventDefault();remove_cart(item);setremove_clik((se)=>!se)}}>
    <Image src={require("../../../imgs/Favorite_red.png")} alt="Favorite" width="20px"height="20px"   />
    </button>
    :
    <button className='btn  btn-primary w-100'onClick={(e) =>{ e.preventDefault();add_cart(item);setremove_clik((se)=>!se)}}>
    <Image src={require("../../../imgs/Favorite_wite.png")} alt="Favorite" width="20px"height="20px"   />
    </button>
  } */}
  <button className='btn  btn-primary w-100'onClick={(e) =>{ e.preventDefault();add_cart(item)  }}>
  <i className="fas fa-cart-plus" />
</button>
  </div>
</div>
</div>
</Link>
</div>)
})
    return (
        <div className=" d-flex align-content-center  justify-content-start  flex-wrap ">
    {show_Favorite}
      </div>
  );

}
