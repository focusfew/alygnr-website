import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import { initAnalytics, initGA4ConsentMode, handleConsentAccepted } from './lib/analytics'
import AnalyticsTracker from './components/AnalyticsTracker'
import CookieConsent from './components/ui/CookieConsent'

initAnalytics()
initGA4ConsentMode()

window.addEventListener('cookie_consent_accepted', handleConsentAccepted)

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
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
import FAQ from './pages/FAQ.tsx'
import Glossary from './pages/Glossary.tsx'
import RequestAccess from './pages/RequestAccess.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <CookieConsent />
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
        <Route path="/faq" element={<FAQ />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/request-access" element={<RequestAccess />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
