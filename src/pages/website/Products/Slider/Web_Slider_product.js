import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Web_products from '../Web_products';
import'.././customStyles.css';
import Show_skeleton from '../../../../components/website/Skeleton';
import { Axios } from '../../../../Api/Axios';
import { WindowSize } from '../../../../context/WindowContext';
export default function Web_Slider_product(pro) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`/${pro.link}`)
      .then((se) => {
        setProducts(se.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const WindowSizes = useContext(WindowSize);
  const Size = WindowSizes.Size;
  console.log(Size);
const caunt=Size>=1024?"6":Size>=778?"4":Size<=777?"3":"2"
  const settings = {
    speed: 1000,
    slidesToShow:Number(caunt),
    slidesToScroll:Number(caunt),
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const ShowProducts = products.map((item) => (
    <Web_products
    key={item.id}
    title={item.title}
    images={item.images}
    rating={item.rating}
    oldPrice={item.price}
    price={item.price-item.discount}
    discount={item.discount}
    category={item.category}
    id={item.id}
  />
  ));

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",marginRight:"30px",zIndex:"50" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className={className}
        style={{ ...style, display: "block" ,marginLeft:"30px",zIndex:"50"}}
        onClick={onClick}
      />
    );
  }

  return (
    <div className=' mx-2 me-2 '>
<div className='  d-flex align-items-center justify-content-between'>
<h1>{pro.text}</h1>  
<button className=' btn  btn-dark text-white rounded-5'>Show ail</button>
</div>
   <div className=' col-12'>
         <Slider {...settings} >
        {loading?<div className='d-flex skeleton_in_Slider'><Show_skeleton height="250px" width="98%" caunt="6" col='col-12'/></div>:ShowProducts}   
         </Slider>
   </div>
    </div>
  );
}
