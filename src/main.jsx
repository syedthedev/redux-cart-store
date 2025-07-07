import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Products from './Products.jsx';
import MyBag from './MyBag.jsx';
import Home from './Home.jsx'; // Make sure this is imported

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // ✅ default route for "/"
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'mybag',
        element: <MyBag />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
