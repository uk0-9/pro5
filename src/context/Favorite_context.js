import { createContext, useState, useEffect } from "react";

// إنشاء Context لإدارة حالة المفضلة
export const Favorite = createContext("");

export default function FavoriteProvider({ children }) {
  // حالة المفضلة ودوالها
  const [favoriteItems, setFavoriteItems] = useState([]);

  // استخدام useEffect للقراءة من localStorage عند تحميل الصفحة
  useEffect(() => {
    const favoriteData = localStorage.getItem("favoriteItems");
    if (favoriteData) {
      setFavoriteItems(JSON.parse(favoriteData));
    }
  }, []);
 
  // استخدام useEffect للكتابة إلى localStorage عند تغيير حالة المفضلة
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, []);
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  // دالة لإضافة منتج إلى المفضلة
  const addToFavorite = (product) => {
    if (!favoriteItems.some(item => item.id === product.id)) {
      setFavoriteItems((prevItems) => [...prevItems, product]);
    }
  };
  // دالة لإزالة منتج من المفضلة
  const removeFromFavorite = (product) => {
    setFavoriteItems((prevItems) => prevItems.filter(item => item.id !== product.id));
  };
  
  // const addToFavorite = (product) => {
  //   setFavoriteItems([...favoriteItems, product]);
  // };

  // // دالة لإزالة منتج من المفضلة
  // const removeFromFavorite = (product) => {
  //   setFavoriteItems(favoriteItems.filter(item => item.id !== product.id));
  // };

  // توفير قيمة المفضلة ودوالها عبر الـ Context Provider
  return (
    <Favorite.Provider value={{ favoriteItems, addToFavorite, removeFromFavorite }}>
      {children}
    </Favorite.Provider>
  );
}



// import { createContext, useState, useEffect } from "react";

// إنشاء Context لإدارة حالة المفضلة
// export const Favorite = createContext("");

// export default function FavoriteProvider({ children }) {
  // حالة المفضلة ودوالها
  // const [favoriteItems, setFavoriteItems] = useState([]);

  // دالة لإضافة منتج إلى المفضلة
  // const addToFavorite = (product) => {
  //   if (!favoriteItems.some(item => item.id === product.id)) {
  //     const updatedFavorites = [...favoriteItems, product];
  //     setFavoriteItems(updatedFavorites);
  //     localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));
  //   }
  // };

  // دالة لإزالة منتج من المفضلة
  // const removeFromFavorite = (product) => {
  //   const favoriteData = localStorage.getItem("favoriteItems");
  //   if (favoriteData) {
  //     const favoriteItems = JSON.parse(favoriteData);
  //     const updatedFavorites = favoriteItems.filter(item => item.id !== product.id);
  //     localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));
  //   }
  // };

  // استخدام useEffect للقراءة من localStorage عند تحميل الصفحة
  // useEffect(() => {
  //   const favoriteData = localStorage.getItem("favoriteItems");
  //   if (favoriteData) {
  //     setFavoriteItems(JSON.parse(favoriteData));
  //   }
  // }, []);

  // توفير قيمة المفضلة ودوالها عبر الـ Context Provider
//   return (
//     <Favorite.Provider value={{ favoriteItems, addToFavorite, removeFromFavorite }}>
//       {children}
//     </Favorite.Provider>
//   );
// }
