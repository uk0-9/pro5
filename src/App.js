
import { useState } from 'react';
import './App.css';
import './index.css';
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
import Nav from './components/website/Nav';
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



export default function App() {
 

  return (
  <BrowserRouter>
        <Routes>
          {/* Puplec Routes */}
          <Route path="/" element={<><Nav/><Home/></>} />
          <Route  element={<Requireback/>} >
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
