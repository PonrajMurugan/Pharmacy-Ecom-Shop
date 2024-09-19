import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/components/Redux/store';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'aos/dist/aos.css'; 
import AOS from 'aos';


AOS.init({
  duration: 2500, 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
