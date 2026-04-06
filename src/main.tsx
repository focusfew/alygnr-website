import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { initAnalytics } from './lib/analytics'
import AnalyticsTracker from './components/AnalyticsTracker'

initAnalytics()
import App from './App.tsx'
import Platform from './pages/Platform.tsx'
import Founders from './pages/Founders.tsx'
import ScalingTeams from './pages/ScalingTeams.tsx'
import Enterprise from './pages/Enterprise.tsx'
import Agencies from './pages/Agencies.tsx'
import Pricing from './pages/Pricing.tsx'
import Company from './pages/Company.tsx'
import Privacy from './pages/Privacy.tsx'
import Terms from './pages/Terms.tsx'
import Certification from './pages/Certification.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/scaling-teams" element={<ScalingTeams />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/company" element={<Company />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
