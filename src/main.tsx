import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Platform from './pages/Platform.tsx'
import Founders from './pages/Founders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/founders" element={<Founders />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
