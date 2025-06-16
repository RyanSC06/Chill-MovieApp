import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)