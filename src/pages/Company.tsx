import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import CompanyHero from '../components/sections/company/CompanyHero';
import CompanyConviction from '../components/sections/company/CompanyConviction';
import CompanyStatement from '../components/sections/company/CompanyStatement';
import CompanyEarlyAccess from '../components/sections/company/CompanyEarlyAccess';
import CompanyCTA from '../components/sections/company/CompanyCTA';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';

export default function Company() {
  return (
    <PageWrapper>
      <Nav activePage="company" />
      <CompanyHero />
      <CompanyConviction />
      <CompanyStatement />
      <CompanyEarlyAccess />
      <CompanyCTA />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}
