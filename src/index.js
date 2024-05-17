import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// css for ail
import './index.css';
import"./css/components/Loading.css"
import"./css/components/Error-message.css"
//fontaosm
import './all.min.css'
//botstsrb
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//auth css
import"./css/auth/authoperations/Form.css"
import"./css/auth/Errors/Err403.css"
import"./css/auth/Errors/Err404.css"
// import"./css/auth/Login.css"
// import"./css/auth/Signup.css"

//dashboard
import"./css/Dashboard/Dashboard.css";
import"./css/Dashboard/Bars.css";
import"./css/Dashboard/Categories.css";
import"./css/Dashboard/paginate.css";
import"./css/components/Button.css";
//context
import Minu_context from './context/Minu_context';
import WindowContext from './context/WindowContext';
import Usar_context from './context/usar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode></React.StrictMode>
  <Usar_context>
    <WindowContext>
    <Minu_context>
    <App />
    </Minu_context>
    </WindowContext>
  </Usar_context>
);



{/* <img alt="" src={require('../../../imgs/wallpaperflare.com_wallpaper (2).png')}/> */}