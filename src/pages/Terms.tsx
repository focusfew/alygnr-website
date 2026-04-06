import SEO from '../components/ui/SEO';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

const sections = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.',
  },
  {
    heading: 'Use of This Website',
    body: 'By visiting this website and submitting an early access request, you agree to use our website only for lawful purposes. We reserve the right to decline any early access request at our discretion.',
  },
  {
    heading: 'Intellectual Property',
    body: 'All content, features, and materials on this website — including but not limited to the software, frameworks, methodologies, copy, and visual design — are the exclusive property of ALYGNR and are protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any part of this website without our express written permission.',
  },
  {
    heading: 'Information You Submit',
    body: 'Any information you submit through our website forms — including your name, company, and email address — is used solely to respond to your enquiry and communicate with you about ALYGNR. We do not use your submitted information for any other purpose without your consent.',
  },
  {
    heading: 'Disclaimers',
    body: 'This website and its content are provided "as is". We make no warranties, express or implied, regarding the accuracy, completeness, or fitness for a particular purpose of any content on this website.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the fullest extent permitted by applicable law, ALYGNR shall not be liable for any indirect, incidental, or consequential damages arising from your use of or reliance on this website.',
  },
  {
    heading: 'Changes to Terms',
    body: 'We reserve the right to modify these Terms of Service at any time. Continued use of this website after changes constitutes acceptance of the updated terms.',
  },
  {
    heading: 'Governing Law',
    body: 'These terms are governed by applicable law. Any disputes shall be resolved through good-faith negotiation before pursuing formal legal remedies.',
  },
  {
    heading: 'Contact',
    body: 'For questions about these Terms of Service, please contact us at legal@alygnr.ai.',
  },
];

export default function Terms() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <PageWrapper>
      <SEO
        title="Terms of Service"
        description="ALYGNR terms of service — the terms that govern use of our website and platform."
        canonical="/terms"
      />
      <Nav />
      <section style={sectionStyle}>
        <div ref={ref} style={container}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>LEGAL</div>
          <h1 style={{ ...headline, ...reveal(1) }}>Terms of Service</h1>
          <p style={{ ...updated, ...reveal(2) }}>Last updated: March 2026</p>

          {sections.map((s) => (
            <div key={s.heading} style={reveal(3)}>
              <h2 style={sectionHeading}>{s.heading}</h2>
              <p style={sectionBody}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--black)',
  padding: '80px 24px',
};

const container: React.CSSProperties = {
  maxWidth: 720,
  margin: '0 auto',
};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 48,
  fontWeight: 700,
  color: 'var(--white)',
  marginBottom: 8,
};

const updated: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 14,
  color: 'var(--text-secondary-dark)',
  marginBottom: 48,
};

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 18,
  fontWeight: 600,
  color: 'var(--white)',
  marginTop: 40,
  marginBottom: 8,
};

const sectionBody: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 16,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.8,
  margin: 0,
};
