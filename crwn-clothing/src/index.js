import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import {CategoriesProvider } from './contexts/categories.context';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';
import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CategoriesProvider> 
            <CartProvider>     
              <App />
            </CartProvider>
          </CategoriesProvider> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);