import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Fetch from './pages/Fetch.jsx';
import Video from './pages/Video.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    )
  },
  {
    path: "/fetch",
    element:<Fetch />,
  },
  {
    path:"/video",
    element:<Video/>

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
