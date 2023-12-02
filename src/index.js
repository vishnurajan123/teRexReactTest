import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContext from './Contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
 <ProductContext>
      
  <BrowserRouter>
          <App />
        </BrowserRouter> 
 </ProductContext>
       </React.StrictMode>
);


