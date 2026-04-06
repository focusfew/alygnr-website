import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const faqs = [
  {
    question: 'What is ALYGNR?',
    answer: 'ALYGNR is a GTM Operating System — a platform that connects your marketing strategy to your execution and then closes the loop with intelligence. It is not a content tool, a campaign manager, or a CRM. It is the layer that sits above your existing tools and ensures that every campaign, asset, and message traces back to a defined strategic intent.',
  },
  {
    question: 'Is ALYGNR an AI writing tool?',
    answer: 'No. ALYGNR uses AI to accelerate orchestration — generating play recommendations, drafting assets within a defined strategic context, and surfacing insights from your execution. But it is not a general-purpose writing tool. Every output is anchored to a Strategic Intent and a Messaging Foundation. The AI works within your strategy, not instead of it.',
  },
  {
    question: 'We already use HubSpot. What does ALYGNR add?',
    answer: 'HubSpot manages your contacts, campaigns, and pipeline. ALYGNR governs the strategy that drives those campaigns. Think of it as the layer above HubSpot — where your messaging foundation, your buyer targeting logic, and your campaign intent are defined and enforced before anything reaches HubSpot.',
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

export default function PlatformFAQ() {
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
        <h2 style={{ ...headline, ...reveal(1) }}>Questions about the platform.</h2>

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
