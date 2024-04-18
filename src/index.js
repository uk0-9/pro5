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
import"./css/auth/Form.css"
import"./css/auth/Err403.css"
// import"./css/auth/Login.css"
// import"./css/auth/Signup.css"
//dashboard
import"./components/Dashboard/Bars/Bars.css";
import"./pages/Dashboard/Dashboard.css";
import"./css/components/Button.css";
import Minu_context from './context/Minu_context';
import WindowContext from './context/WindowContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode></React.StrictMode>
    <WindowContext>
    <Minu_context>
    <App />
    </Minu_context>
    </WindowContext>
  
);

