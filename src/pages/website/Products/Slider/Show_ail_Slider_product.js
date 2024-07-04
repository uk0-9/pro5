import React from 'react'
import { PRODUCTS, SALE,LATEST,TOP } from '../../../../Api/Api';
import Web_Slider_product from './Web_Slider_product';
export default function Show_ail_Slider_product() {
  return (<> 
    {/* <Web_Slider_product link={PRODUCTS} text="for you" /> */}
    <Web_Slider_product link={SALE} text="Discount" />
    <Web_Slider_product link={LATEST} text="Now product" />
    <Web_Slider_product link={TOP} text="Top rated" />
    </>
  )
}

