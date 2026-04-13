import { useRef, useEffect } from 'react';
import productVideo from './assets/alygnr-product-story.mp4';
import posterImage from './assets/alygnr-product-story-poster.jpg';
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play();
        } else {
          el.pause();
          el.currentTime = 0;
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
      <section style={{ background: '#F7F7F5', padding: '56px 24px', borderTop: 'none', marginTop: 0 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            borderRadius: 16,
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            overflow: 'hidden',
          }}>
            <video
              ref={videoRef}
              src={productVideo}
              poster={posterImage}
              muted
              loop
              playsInline
              controls={false}
              controlsList="nodownload"
              style={{
                width: '100%',
                borderRadius: 12,
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>
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
