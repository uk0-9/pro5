// PageWithTailwind.js
import React from 'react';
import Tailwindd from './Tailwindd';

const PageWithTailwind = () => {
  return (
<div className="row">
  <div className="col-2 ">
    <div className="card border-light">
      <img src={require("../imgs/cart.png")} alt="product-image" />
      <div className="card-footer border-top border-light p-4">
        <a href="#" className="h5 text-decoration-none">Apple Watch Series</a>
        <div className="d-flex mt-3">
          <span className="badge bg-secondary badge-pill badge-gray ml-2 me-3"><i className="star fas fa-star text-warning mr-1" />4.7</span>
          <span className="h5 mb-0 text-gray">$299.00</span>
        </div>
        <div className=" mt-3">
          <a className="btn btn-xs btn-primary" href="#">
            <span className="fas fa-cart-plus mr-2" /> Add to cart
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default PageWithTailwind;
