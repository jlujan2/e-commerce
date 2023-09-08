import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store';
import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);