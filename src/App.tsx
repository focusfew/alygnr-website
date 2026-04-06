import SEO from './components/ui/SEO'
import PageWrapper from './components/layout/PageWrapper'
import Nav from './components/nav/Nav'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import SystemLoop from './components/sections/SystemLoop'
import ValueProps from './components/sections/ValueProps'
import BeforeAfter from './components/sections/BeforeAfter'
import Integrations from './components/sections/Integrations'
import Trust from './components/sections/Trust'
import WhoItsFor from './components/sections/WhoItsFor'
import ClosingCTA from './components/sections/ClosingCTA'
import Footer from './components/sections/Footer'
import RequestAccessModal from './components/ui/RequestAccessModal'

export default function App() {
  return (
    <PageWrapper>
      <SEO
        title="The GTM Operating System"
        description="ALYGNR turns strategic alignment into predictable pipeline. The GTM Intelligence Operating System for B2B marketing teams, enterprises, and agencies."
        canonical="/"
      />
      <Nav />
      <Hero />
      <Problem />
      <SystemLoop />
      <ValueProps />
      <BeforeAfter />
      <Integrations />
      <Trust />
      <WhoItsFor />
      <ClosingCTA />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  )
}
