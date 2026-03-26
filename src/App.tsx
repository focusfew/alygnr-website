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
