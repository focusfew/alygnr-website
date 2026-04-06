import SEO from '../components/ui/SEO';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import ScalingTeamsHero from '../components/sections/icp/ScalingTeamsHero';
import ScalingTeamsProblem from '../components/sections/icp/ScalingTeamsProblem';
import ICPLoop from '../components/sections/icp/ICPLoop';
import ScalingTeamsOutcomes from '../components/sections/icp/ScalingTeamsOutcomes';
import ScalingTeamsCTA from '../components/sections/icp/ScalingTeamsCTA';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';

export default function ScalingTeams() {
  return (
    <PageWrapper>
      <SEO
        title="For Scaling GTM Teams"
        description="Give your growing marketing team a shared strategic foundation. ALYGNR keeps every campaign aligned to intent — so execution compounds instead of resets."
        canonical="/scaling-teams"
      />
      <Nav activePage="scaling-teams" />
      <ScalingTeamsHero />
      <ScalingTeamsProblem />
      <ICPLoop
        eyebrow="THE SYSTEM"
        eyebrowClass="eyebrow-light"
        headline="One strategic intent. Every execution inherits from it."
        subhead="ALYGNR turns your strategy into a structured execution system — so your team moves faster without losing the thread back to intent."
      />
      <ScalingTeamsOutcomes />
      <ScalingTeamsCTA />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}
