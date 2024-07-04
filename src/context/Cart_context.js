import { createContext, useState, useEffect } from "react";

// إنشاء Context لإدارة حالة السلة
export const Cart = createContext("");

export default function Usar_context({ children }) {
  // حالة السلة ودوالها
  const [cartItems, setCartItems] = useState([]);

  // استخدام useEffect للقراءة من localStorage عند تحميل الصفحة
  // اذا نحمل الصفحه عشان يجيب البيانات و تحويلها ال جيسون عشان تقراها طبيعي 
  useEffect(() => {
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  // استخدام useEffect للكتابة إلى localStorage عند تغيير حالة السلة
  // اا غيرت فيها شي تتعدل و تحولها الى جيسون عشان تقراها طبيعي 
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // دالة لإضافة منتج إلى السلة
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // دالة لإزالة منتج من السلة
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  // توفير قيمة السلة ودوالها عبر الـ Context Provider
  return (
    <Cart.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Cart.Provider>
  );
}
