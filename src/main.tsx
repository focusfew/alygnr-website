import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Platform from './pages/Platform.tsx'
import Founders from './pages/Founders.tsx'
import ScalingTeams from './pages/ScalingTeams.tsx'
import Enterprise from './pages/Enterprise.tsx'
import Agencies from './pages/Agencies.tsx'
import Company from './pages/Company.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/scaling-teams" element={<ScalingTeams />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
