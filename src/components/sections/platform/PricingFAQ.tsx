import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const faqs = [
  {
    question: 'What does early access mean?',
    answer: 'Early access means you are joining ALYGNR before the platform is publicly available. We are working directly with a small group of B2B marketing teams to refine the system. Early access members get hands-on onboarding, direct access to the team, and the opportunity to shape the product roadmap. Spots are limited.',
  },
  {
    question: 'Is ALYGNR suitable for small marketing teams?',
    answer: 'Yes. ALYGNR is designed to give small teams the strategic discipline that is usually only accessible to large organisations with dedicated strategists. If you are running GTM with a team of two or three people, ALYGNR gives you the structure to make every campaign count without adding management overhead.',
  },
  {
    question: 'What tools does ALYGNR integrate with?',
    answer: 'ALYGNR currently integrates with HubSpot, Salesforce, LinkedIn, Slack, Mailchimp, and Google Analytics 4. Google Ads integration is coming soon. ALYGNR sits above your existing tool stack — it governs strategy and generates assets that you then distribute through the tools you already use.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((qa) => ({
    '@type': 'Question',
    name: qa.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: qa.answer,
    },
  })),
};

export default function PricingFAQ() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <section style={sectionStyle}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div ref={ref} style={container}>
        <div className="eyebrow eyebrow-dark eyebrow-center" style={reveal(0)}>
          <span className="eyebrow-bar" />
          COMMON QUESTIONS
        </div>
        <h2 style={{ ...headline, ...reveal(1) }}>Questions about pricing and access.</h2>

        {faqs.map((qa, i) => {
          const isLast = i === faqs.length - 1;
          return (
            <div key={qa.question} style={{ ...(isLast ? undefined : qaWrap), ...reveal(2) }}>
              <h3 style={questionStyle}>{qa.question}</h3>
              <p style={answerStyle}>{qa.answer}</p>
            </div>
          );
        })}

        <div style={reveal(3)}>
          <Link to="/faq" style={linkStyle}>See all questions &rarr;</Link>
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--black)',
  padding: 'var(--section-padding-standard)',
};

const container: React.CSSProperties = {
  maxWidth: 760,
  margin: '0 auto',
};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 36,
  fontWeight: 700,
  color: 'var(--white)',
  textAlign: 'center',
  marginBottom: 48,
};

const questionStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  fontWeight: 600,
  color: 'var(--white)',
  marginBottom: 12,
};

const answerStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 16,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.8,
  marginBottom: 32,
};

const qaWrap: React.CSSProperties = {
  borderBottom: '1px solid rgba(255,255,255,0.06)',
};

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 15,
  color: 'var(--orange)',
  textDecoration: 'none',
};
