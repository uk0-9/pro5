
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
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Signup2 from './pages/auth/Signup2';
import Login2 from './pages/auth/Login2';
import Google_callback from './pages/auth/Google-callback';
//dashboard
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Dashboard/users/Users';
//webside
import Home from './pages/website/home/Home';
import Nav from './components/website/Nav';
import Loading from './components/website/Loading';
import RequireAuth from './pages/auth/RequireAuth';
import Updatd_user from './pages/Dashboard/users/Updatd_user';
import Add_user from './pages/Dashboard/users/Add_user';

import Writer from './pages/auth/Writer';



export default function App() {
 

  return (
  <BrowserRouter>
        <Routes>
          {/* Puplec Routes */}
          <Route path="/" element={<><Nav/><Home/></>} />
          <Route path="/signup" element={<><Nav/><Signup2/></>} />
          <Route path="/login" element={<><Nav/><Login2/></>} />
          <Route path="/auth/google/callback" element={<Google_callback/>} />
          {/* Protected Routes */}
      <Route  element={<RequireAuth/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route element={<RequireAuth allowedRole={"1995"} />}>
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<Updatd_user />} />
            <Route path="user/Add" element={<Add_user />} />
          </Route>
          <Route element={<RequireAuth allowedRole={"1996"||"1995"} />}>
            <Route path="Writer" element={<Writer />} />
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
  );
}
