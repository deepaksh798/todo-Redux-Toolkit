import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <App />
  </Provider>,
)


// Here we wrap our components
// We import Provider and store
// In Provider he need value just like contextAPI but here we call "store" in the place of value and pass "store"