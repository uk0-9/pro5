import React, { useEffect, useState } from 'react';
import { Axios } from '../../../Api/Axios';
import { PRODUCTS } from '../../../Api/Api';
import 'react-loading-skeleton/dist/skeleton.css';
import Show_skeleton from '../../../components/website/Skeleton';
import Web_products from './Web_products';

export default function Show_ail_product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Axios.get(`/${PRODUCTS}`)
      .then((response) =>setProducts(response.data))
      .finally(()=>setLoading(false))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  const Show_ail_product= products.map((item) => (
    <Web_products
      key={item.id}
      title={item.title}
      images={item.images}
      rating={item.rating}
      oldPrice={item.price}
      price={item.price-item.discount}
      discount={item.discount}
      category={item.category}
    />
  ))
  return (
    <div className='gg'>
      <h1>seali</h1>
      <div className="d-flex flex-wrap align-items-center justify-content-start">
      {loading?<Show_skeleton height="300px" width="98%" caunt="6" col='col-2'/>:Show_ail_product}  
      </div>
    </div>
  );
}
