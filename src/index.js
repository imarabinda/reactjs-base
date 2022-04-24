import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routers/Router';
import App from './components/App';
import {StoreProvider,store,persistor} from './redux/store'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
