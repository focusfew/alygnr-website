import SEO from '../components/ui/SEO';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import AgenciesHero from '../components/sections/icp/AgenciesHero';
import AgenciesProblem from '../components/sections/icp/AgenciesProblem';
import ICPLoop from '../components/sections/icp/ICPLoop';
import AgenciesMultiClient from '../components/sections/icp/AgenciesMultiClient';
import AgenciesOutcomes from '../components/sections/icp/AgenciesOutcomes';
import AgenciesCTA from '../components/sections/icp/AgenciesCTA';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';

export default function Agencies() {
  return (
    <PageWrapper>
      <SEO
        title="For B2B Agencies"
        description="Run structured, repeatable GTM strategy across every client. ALYGNR gives B2B agencies a system that scales without rebuilding from scratch each time."
        canonical="/agencies"
      />
      <Nav activePage="agencies" />
      <AgenciesHero />
      <AgenciesProblem />
      <ICPLoop
        eyebrow="THE SYSTEM"
        eyebrowClass="eyebrow-light"
        headline="One framework. Every client benefits from it."
        subhead="ALYGNR gives your agency a structured GTM operating system that works across every client engagement — so strategy is faster to set, execution is faster to brief, and results are faster to learn from."
      />
      <AgenciesMultiClient />
      <AgenciesOutcomes />
      <AgenciesCTA />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}
