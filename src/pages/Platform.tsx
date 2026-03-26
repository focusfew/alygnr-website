import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import PlatformHero from '../components/sections/platform/PlatformHero';
import TheCost from '../components/sections/platform/TheCost';
import PlatformLoop from '../components/sections/platform/PlatformLoop';
import ProductInPractice from '../components/sections/platform/ProductInPractice';
import WhatYouGet from '../components/sections/platform/WhatYouGet';
import PlatformBeforeAfter from '../components/sections/platform/PlatformBeforeAfter';
import WhyTrustThis from '../components/sections/platform/WhyTrustThis';
import PlatformCTA from '../components/sections/platform/PlatformCTA';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';

export default function Platform() {
  return (
    <PageWrapper>
      <Nav activePage="platform" />
      <PlatformHero />
      <TheCost />
      <PlatformLoop />
      <ProductInPractice />
      <WhatYouGet />
      <PlatformBeforeAfter />
      <WhyTrustThis />
      <PlatformCTA />
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}
