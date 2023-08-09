import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context';
import router from './router.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
