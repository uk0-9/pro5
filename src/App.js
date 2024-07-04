
import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
//auth 
import Signup2 from './pages/auth/authoperations/Signup2';
import Login2 from './pages/auth/authoperations/Login2';
import Google_callback from './pages/auth/authoperations/Google-callback';
//dashboard
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Dashboard/users/Users';
//webside
import Home from './pages/website/home/Home';
import Nav from './components/website/Navbar/Nav';
import Loading from './components/website/Loading';
import RequireAuth from './pages/auth/protecting/RequireAuth';
import Updatd_user from './pages/Dashboard/users/Updatd_user';
import Add_user from './pages/Dashboard/users/Add_user';

import Writer from './pages/auth/Writer';
import Err404 from './pages/auth/Errors/Err404';
import Requireback from './pages/auth/protecting/Requireback';

import Categories from './pages/Dashboard/Categories/Categories';
import Addcategories from './pages/Dashboard/Categories/Addcategories';
import Updatd_Categories from './pages/Dashboard/Categories/Updatd_Categories';
import Products from './pages/Dashboard/Products/Products';
import AddProducts from './pages/Dashboard/Products/AddProducts';
import Updatd_Products from './pages/Dashboard/Products/Updatd_Products';
import Nav2 from './components/website/Navbar/nav2';
import Nav3 from './components/website/Navbar/nav3';

import Website from './pages/website/Website';
import Web_category from './pages/website/Category/Web_category';
import Web_show_Single_product from './pages/website/Products/Web_show_Single_product';
import Cart_page from './pages/website/Products/Cart/Cart';



import'./pages/website/Products/Cart/Cart.css';
import Profile from './pages/website/profile/Profile';
import PageWithTailwind from './Tailwind/Tailwind_buton';
import Favoritepage from './pages/website/profile/Favoritepage';


export default function App() {
 

  return (
  <BrowserRouter>
        <Routes>
          {/* Puplec Routes */}
          <Route  element={<><Website/></>} >
          <Route path="/" element={<Home/>} />
          <Route path="/favorite" element={<Favoritepage/>} />
          <Route path="/cc" element={<PageWithTailwind/>} />
          <Route path="/cart" element={<Cart_page/>} />
          <Route path="/product/:id" element={<Web_show_Single_product/>} />
          <Route path="/Category" element={<Web_category/>} />
          <Route path="/profile" element={<Profile/>} />
          </Route>
          <Route element={<Requireback/>} >
          <Route path="/signup" element={<><Nav/><Signup2/></>} />
          <Route path="/login" element={<><Nav/><Login2/></>} />
          </Route>
          <Route path="/auth/google/callback" element={<Google_callback/>} />
             {/* Protected Routes */}
             <Route path="/*" element={<Err404 />} />
        <Route element={<RequireAuth allowedRole={["1995", "1996","1999"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth allowedRole={["1995"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<Updatd_user />} />
              <Route path="user/Add" element={<Add_user />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["1996", "1995"]} />}>
              <Route path="Writer" element={<Writer />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["1999", "1995"]} />}>
              <Route path="Categories" element={<Categories/>} />
              <Route path="Categorie/Add" element={<Addcategories/>} />
              <Route path="Categories/:id" element={<Updatd_Categories/>} />
              <Route path="Products" element={<Products/>} />
              <Route path="Product/Add" element={<AddProducts/>} />
               <Route path="Products/:id" element={<Updatd_Products/>} /> 
            </Route>
            <Route element={<RequireAuth allowedRole={["1999", "1995"]} />}>
             
            </Route>
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
  );
}


// docker run -it \
//     --pull=always \
//     -e SANDBOX_USER_ID=$(id -u) \
//     -e PERSIST_SANDBOX="true" \
//     -e SSH_PASSWORD="randompassword" \
//     -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
//     -v $WORKSPACE_BASE:/mnt/c/Users/a4080/Desktop/OpenDevinWorkspace \
//     -v /var/run/docker.sock:/var/run/docker.sock \
//     -p 3000:3000 \
//     --add-host host.docker.internal:host-gateway \
//     --name opendevin-app-$(date +%Y%m%d%H%M%S) \
//     ghcr.io/opendevin/opendevin:0.6.2
//     export WORKSPACE_BASE=/mnt/c/Users/a4080/Desktop/OpenDevinWorkspace/workspace


//     WORKSPACE_BASE=/mnt/c/Users/a4080/Desktop/OpenDevinWorkspace