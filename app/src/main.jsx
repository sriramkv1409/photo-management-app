import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PhotoProvider } from './context/PhotoContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotoProvider>
        <App />
      </PhotoProvider>
    </BrowserRouter>
  </React.StrictMode>
)