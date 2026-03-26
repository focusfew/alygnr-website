import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

const sections = [
  {
    heading: 'Introduction',
    body: 'ALYGNR ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or submit an enquiry.',
  },
  {
    heading: 'Information We Collect',
    body: 'We may collect the following types of information: (a) Information you provide directly, such as your name, company name, and email address when you request early access or contact us. (b) Usage data, such as pages visited, time spent on pages, and browser type, collected automatically when you visit our website.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'We use the information we collect to: respond to your early access requests and enquiries; improve and develop our website; communicate with you about ALYGNR updates and announcements; and comply with legal obligations.',
  },
  {
    heading: 'Data Sharing',
    body: 'We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website, subject to confidentiality obligations. We may disclose information if required by law.',
  },
  {
    heading: 'Data Retention',
    body: 'We retain your information for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law.',
  },
  {
    heading: 'Your Rights',
    body: 'Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or request deletion of your information. To exercise these rights, contact us at privacy@alygnr.ai.',
  },
  {
    heading: 'Cookies',
    body: 'Our website may use cookies and similar technologies to improve your experience. You can control cookie settings through your browser.',
  },
  {
    heading: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page.',
  },
  {
    heading: 'Contact',
    body: 'If you have questions about this Privacy Policy, please contact us at privacy@alygnr.ai.',
  },
];

export default function Privacy() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <PageWrapper>
      <Nav />
      <section style={sectionStyle}>
        <div ref={ref} style={container}>
          <div className="eyebrow eyebrow-dark" style={reveal(0)}>LEGAL</div>
          <h1 style={{ ...headline, ...reveal(1) }}>Privacy Policy</h1>
          <p style={{ ...updated, ...reveal(2) }}>Last updated: March 2026</p>

          {sections.map((s, i) => (
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
