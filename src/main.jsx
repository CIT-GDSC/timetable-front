import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'


import router from './router.js'
import './index.css'
import { ContextProvider } from './context';
import { store } from './store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
)
