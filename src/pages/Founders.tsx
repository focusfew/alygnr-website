import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import FoundersHero from '../components/sections/icp/FoundersHero';
import FoundersProblem from '../components/sections/icp/FoundersProblem';
import ICPLoop from '../components/sections/icp/ICPLoop';
import FoundersOutcomes from '../components/sections/icp/FoundersOutcomes';
import FoundersCTA from '../components/sections/icp/FoundersCTA';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';

export default function Founders() {
  return (
    <PageWrapper>
      <Nav activePage="founders" />
      <FoundersHero />
      <FoundersProblem />
      <ICPLoop />
      <FoundersOutcomes />
      <FoundersCTA />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}
