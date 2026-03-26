import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import EnterpriseHero from '../components/sections/icp/EnterpriseHero';
import EnterpriseProblem from '../components/sections/icp/EnterpriseProblem';
import ICPLoop from '../components/sections/icp/ICPLoop';
import EnterpriseGovernance from '../components/sections/icp/EnterpriseGovernance';
import EnterpriseOutcomes from '../components/sections/icp/EnterpriseOutcomes';
import EnterpriseCTA from '../components/sections/icp/EnterpriseCTA';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';

export default function Enterprise() {
  return (
    <PageWrapper>
      <Nav activePage="enterprise" />
      <EnterpriseHero />
      <EnterpriseProblem />
      <ICPLoop
        eyebrow="THE SYSTEM"
        eyebrowClass="eyebrow-light"
        headline="One system. Every team aligned. Every cycle smarter."
        subhead="ALYGNR is the orchestration layer between strategy and execution — so every team inherits the same intent, the same messaging, and the same intelligence."
      />
      <EnterpriseGovernance />
      <EnterpriseOutcomes />
      <EnterpriseCTA />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}
