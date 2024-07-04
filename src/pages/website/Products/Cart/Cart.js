import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { Cart } from '../../../../context/Cart_context';
import String_slice from '../../../../helpers/String_slice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useContext(Cart);
  const [item_in_cart_caunt, setitem_in_cart_caunt] = useState([]);
  
  useEffect(() => {
    // Initialize item_in_cart_caunt with default quantity of 1 for each item in cart
    if (cart.cartItems.length > 0) {
      setitem_in_cart_caunt(cart.cartItems.map(() => 1));
    }
  }, [cart.cartItems]);

  const handleQuantityChange = (index, event) => {
    const item_in_cart_caunt2 = [...item_in_cart_caunt];
    const convert_to_number = Number(event.target.value) || 1;
    item_in_cart_caunt2[index] = convert_to_number;
    setitem_in_cart_caunt(item_in_cart_caunt2);
  };

  const removeCartItem = (product) => {
    cart.removeFromCart(product);
  };

  const calculateSubtotal = () => {
    return cart.cartItems.reduce((total, item, index) => {
      const itemPrice = (item.oldPrice) * (item_in_cart_caunt[index]);
      return total + itemPrice;
    }, 0);
  };

  const calculateDiscount = () => {
    return cart.cartItems.reduce((total, item) => {
      return total + item.discount * (item_in_cart_caunt[cart.cartItems.indexOf(item)] || 1);
    }, 0);
  };
  return (
    <div className="cart-container  p-3  rounded-1  bg-white ">
      <header className="cart-header">
        <h1>My Cart</h1>
      </header>
      <div className="cart-content">

        <div className=" col-12 col-lg-8  order-0">

          {cart.cartItems.map((item, index) => (
            <div className=" d-flex  align-items-center  rounded-1 bg-white  mb-2    position-relative   cart-item   " key={index}>
              
            <Link className='text-decoration-none text-dark' to={`/product/${item.id}`}>
              <div className="item-image">
                {item.images.length>0?
                <img src={item.images[0].image} alt={item.title} />:
                <img src={require("../../../../imgs/cart.png")} alt={item.title} />
                }
                
              </div>
              </Link>

              <div className="col-0 col-lg-9">

            <div className=''>
                  <p className=''>{item.title}</p>

                    <div className=" d-flex mx-2">
                  <p className='  text-decoration-line-through me-2'>${(item.oldPrice) * (item_in_cart_caunt[index])}</p>
                    <p>${(item.price) * (item_in_cart_caunt[index])}</p>
                  </div>

            </div>

          <div className='  d-flex  align-items-end justify-content-between     '>

          <div className="item-actions  position-absolute    bottom-0 ">
                  <button className="remove" onClick={() => removeCartItem(item)}>Remove</button>
                </div>

                <div className="item-quantity position-absolute end-0  bottom-0">
                  <select value={item_in_cart_caunt[index]} onChange={(e) => handleQuantityChange(index, e)}>
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>

          </div>

</div>

            </div>
          ))}
        </div>
       <div className="cart-summary">
          <div className="d-flex align-items-center justify-content-center mb-2 promo-code">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
          <div className="summary-details">
            <p>Subtotal: ${(calculateSubtotal()).toFixed(2)}</p>
            <p>Discount: ${calculateDiscount().toFixed(2)}</p>
            <p>Tax: ${((calculateSubtotal()-(calculateDiscount()))*0.15).toFixed(2)}</p>
          </div>
          <div className="summary-total">
            <h2>Estimated Total: ${((calculateSubtotal()) + ((calculateSubtotal()-(calculateDiscount()))*0.15)-(calculateDiscount())).toFixed(2)}</h2>
          </div>
          <div className="checkout">
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}; 
export default CartPage;