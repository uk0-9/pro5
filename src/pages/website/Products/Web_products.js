import React, { useContext } from 'react';
import {  Card, Badge, Image, Carousel, CarouselItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Cart } from '../../../context/Cart_context';
import { Favorite } from '../../../context/Favorite_context';
export default function Web_products(pro) {
  const cart =useContext(Cart)
const add_cart=(pro)=>{cart.addToCart(pro)}
// const remove_cart=(product)=>{cart.removeFromCart(product)}
const Favorite2 =useContext(Favorite)
const add_Favorite=(pro)=>{Favorite2.addToFavorite(pro)}
// const remove_cart=(pro)=>{Favorite2.removeFromFavorite(pro)}
    return (<Link to={`/product/${pro.id}`} className=' text-decoration-none'>
      <Card className="border rounded p-2 col-12">
      <div className='p-0 img_bg_color rounded w-100'>
      <span className=' position-absolute z-2 mt-1' 
                onClick={(e) => { 
                  e.preventDefault(); 
                  add_Favorite(pro); 
                }}
              >
                <Image src={require('../../../imgs/heart.png')} alt="favorite" width="20px" style={{ marginTop: "-3px", marginLeft: "2px" }} />
              </span>
        {pro.images && pro.images.length > 0 ? (
          <Carousel>
            {pro.images.map((imageObj, index) => (
              <CarouselItem key={index}>
                <Image src={imageObj.image} alt={pro.title} className="w-100" style={{ height: "150px" }} />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          <Image src={require("../../../imgs/cart.png")} alt={pro.title} className="w-100" style={{ height: "140px" }} />
        )}
        <div className='d-flex justify-content-between align-items-center position-absolute'>
        <button className='border rounded-2 bg-white position-absolute z-2' style={{bottom:"-1px",left:'-2px',}} onClick={(e) => { 
              e.preventDefault(); 
              add_cart(pro); 
            }}>
              <img src="https://f.nooncdn.com/s/app/com/noon/icons/quick-atc-add-to-cart-grey.svg" alt="add-to-cart" width="24px" height="24px" />
            </button>
          <div className="d-flex align-items-center justify-content-center bg-white rounded-2 card_rating position-absolute z-2"   style={{bottom:"0px",right: '18px',  }} >
            <p className="text-muted mb-0 ms-0">(50k)</p>
            <FontAwesomeIcon icon={faStar} color="gold" />{pro.rating}
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="text-primary text-truncate" style={{ fontSize: "15px" }}>{pro.title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center kk">
          <div>
            <div className="d-flex align-items-center">
              <p className="m-0 text-muted text-decoration-line-through">${pro.oldPrice}</p>
              <Badge bg="success" className="ms-2">-{Math.round((pro.discount / pro.oldPrice)*100)}%</Badge>
            </div>
            <div className="text-primary h5 m-0">${pro.price}</div>
          </div>
          <Card.Subtitle className="text-muted mt-1">{pro.category}</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
    </Link>
  );
}
