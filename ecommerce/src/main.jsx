import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './Views/Login/Login';
import Home from './Views/Home/Home';
import Products from './Views/Products/Products';
import Pay from './Views/Pay/Pay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },

  {
    path: "/home",
    element: <Home />
  },

  {
    path: "/products/:productId",
    element: <Products />
  },

  {
    path: "/pay/:payId",
    element: <Pay />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
