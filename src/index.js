import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@components/Button/Button.sass';
import './index.css';

const application = (
  <BrowserRouter>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        theme="dark"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover/>
      <App /> 
  </BrowserRouter>
)

ReactDOM.render(application,document.getElementById('root'));
reportWebVitals();