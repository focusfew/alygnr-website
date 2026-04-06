import { Helmet } from 'react-helmet-async';
import SEO from '../components/ui/SEO';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── FAQ data ─── */

interface QA {
  question: string;
  answer: string;
}

interface FAQGroup {
  title: string;
  items: QA[];
}

const groups: FAQGroup[] = [
  {
    title: 'About ALYGNR',
    items: [
      {
        question: 'What is ALYGNR?',
        answer: 'ALYGNR is a GTM Operating System — a platform that connects your marketing strategy to your execution and then closes the loop with intelligence. It is not a content tool, a campaign manager, or a CRM. It is the layer that sits above your existing tools and ensures that every campaign, asset, and message traces back to a defined strategic intent.',
      },
      {
        question: 'How is ALYGNR different from a marketing automation platform?',
        answer: 'Marketing automation platforms manage the distribution of content — emails, ads, sequences. ALYGNR manages the strategy behind that content. It answers the question that automation platforms skip: does this campaign reflect what we actually decided, and is it producing the intelligence we need to do better next time?',
      },
      {
        question: 'We already use HubSpot. What does ALYGNR add?',
        answer: 'HubSpot manages your contacts, campaigns, and pipeline. ALYGNR governs the strategy that drives those campaigns. Think of it as the layer above HubSpot — where your messaging foundation, your buyer targeting logic, and your campaign intent are defined and enforced before anything reaches HubSpot.',
      },
      {
        question: 'Is ALYGNR an AI writing tool?',
        answer: 'No. ALYGNR uses AI to accelerate orchestration — generating play recommendations, drafting assets within a defined strategic context, and surfacing insights from your execution. But it is not a general-purpose writing tool. Every output is anchored to a Strategic Intent and a Messaging Foundation. The AI works within your strategy, not instead of it.',
      },
      {
        question: 'What kind of companies use ALYGNR?',
        answer: 'ALYGNR is built for B2B marketing teams that run complex, multi-channel GTM motions. This includes scaling startups building their first structured GTM process, mid-market marketing teams managing multiple campaigns and channels, enterprise organisations coordinating GTM across teams and markets, and B2B agencies running GTM programmes for multiple clients.',
      },
    ],
  },
  {
    title: 'GTM Strategy & Marketing Alignment',
    items: [
      {
        question: 'What is a go-to-market strategy and how do you execute one?',
        answer: 'A go-to-market strategy defines who you are selling to, what problem you solve for them, how you will reach them, and what you will say. Executing one means translating those decisions into campaigns, messaging, and channels — and then measuring whether the execution actually reflected the strategy. Most teams are good at the first part and struggle with the second.',
      },
      {
        question: 'How do B2B marketing teams manage messaging consistency across channels?',
        answer: 'The most reliable way is to have a single source of truth for your positioning — a defined set of messages, value statements, and proof points that every campaign inherits from. Without this, each campaign gets briefed independently and messaging drifts. ALYGNR calls this the Messaging Foundation, and it governs every play and asset generated in the platform.',
      },
      {
        question: 'Why do marketing campaigns drift from the original strategy?',
        answer: 'Because strategy is usually documented in a deck or a doc, and execution happens somewhere else entirely. By the time a brief reaches an agency or a copywriter, the original strategic intent has been filtered through several layers of interpretation. The gap between what was decided and what ships is not a people problem — it is a systems problem.',
      },
      {
        question: 'What is a GTM playbook and how do I build one?',
        answer: 'A GTM playbook is a structured set of campaigns, messages, and channels organised around a specific objective — pipeline generation, market entry, product launch. Building one means defining your buyer, your message, your funnel stages, and the specific plays you will run at each stage. ALYGNR automates the generation of play recommendations based on your stated intent and buyer context.',
      },
      {
        question: 'How do you measure whether your GTM strategy is working?',
        answer: 'Most teams measure campaign performance — clicks, leads, pipeline. Fewer measure whether the campaigns actually reflected the strategy. The ALYGNR Score measures execution accuracy: are your plays covering the right funnel stages, is your messaging consistent, are you generating the intelligence you need to improve? Pipeline is the outcome. The score tells you whether your system is producing it reliably.',
      },
      {
        question: 'What is the difference between a marketing strategy and a marketing plan?',
        answer: 'A strategy defines the decisions — who you target, what you say, why you win. A plan defines the activities — what you will do, when, and with what budget. Most marketing teams have plans. Fewer have strategies that actually govern those plans. The gap between them is where pipeline unpredictability lives.',
      },
      {
        question: 'How do I connect marketing activity to pipeline results?',
        answer: 'By creating traceability between your campaigns and the intent that created them. When every campaign is generated from a defined Strategic Intent — with a clear objective, audience, and messaging foundation — you can map performance back to the decisions that drove it. ALYGNR builds this traceability into the platform so every asset links back to the intent that produced it.',
      },
    ],
  },
  {
    title: 'AI in Marketing',
    items: [
      {
        question: 'How is AI being used in B2B marketing strategy?',
        answer: 'AI is being used in two distinct ways in B2B marketing. The first is content generation — producing drafts, variations, and copy at scale. The second is strategic orchestration — using AI to recommend campaign structures, identify execution gaps, and surface intelligence from performance data. The first is widely adopted. The second is where significant competitive advantage is being built.',
      },
      {
        question: 'Can AI help with go-to-market planning?',
        answer: 'Yes — but the quality of AI output in GTM planning depends entirely on the quality of the strategic context you give it. AI that operates without a defined buyer, a clear messaging foundation, and a specific objective produces generic output. ALYGNR structures the strategic context first, then applies AI within that context to generate plays, assets, and recommendations that are grounded in your actual strategy.',
      },
      {
        question: 'What is the difference between AI content tools and AI strategy tools?',
        answer: 'AI content tools generate output — copy, images, emails — given a prompt. AI strategy tools help you define and govern the decisions that determine what those outputs should say and why. The distinction matters because content without strategic grounding creates noise. ALYGNR sits in the strategy layer: it defines the intent, the messaging, and the play structure before any content is generated.',
      },
      {
        question: 'How do marketing teams use AI without losing strategic control?',
        answer: 'By ensuring AI operates within a defined strategic framework rather than generating content freely. This means having a documented messaging foundation, a clear buyer definition, and a structured campaign intent before AI is applied. ALYGNR enforces this by requiring a Strategic Intent to be set before any plays or assets are generated — the AI works within your strategy, not around it.',
      },
      {
        question: 'Does using AI for marketing mean sacrificing brand consistency?',
        answer: 'Only if the AI has no governing context. When AI generates content without a defined messaging foundation, tone guidelines, or buyer context, the output is inconsistent by design. ALYGNR solves this by anchoring every AI-generated asset to a Messaging Foundation — a single source of truth for positioning, value statements, and tone that every output inherits from.',
      },
    ],
  },
  {
    title: 'Getting Started',
    items: [
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
    ],
  },
];

/* ─── build FAQ schema for all 20 questions ─── */

const allQA = groups.flatMap((g) => g.items);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allQA.map((qa) => ({
    '@type': 'Question',
    name: qa.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: qa.answer,
    },
  })),
};

/* ─── component ─── */

export default function FAQ() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <PageWrapper>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about ALYGNR, GTM strategy, marketing alignment, AI in marketing, and how the GTM Operating System works."
        canonical="/faq"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Nav />
      <section style={sectionStyle}>
        <div ref={ref} style={container}>
          <div className="eyebrow eyebrow-dark eyebrow-center" style={reveal(0)}>
            <span className="eyebrow-bar" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 style={{ ...headline, ...reveal(1) }}>Questions people actually ask.</h1>
          <p style={{ ...intro, ...reveal(2) }}>
            About ALYGNR, GTM strategy, marketing alignment, and AI in marketing.
          </p>

          {groups.map((group, gi) => (
            <div key={group.title} style={reveal(3)}>
              <h2 style={groupHeading}>{group.title}</h2>
              {group.items.map((qa, qi) => {
                const isLast = qi === group.items.length - 1;
                return (
                  <div key={qa.question} style={isLast ? undefined : qaWrap}>
                    <h3 style={questionStyle}>{qa.question}</h3>
                    <p style={answerStyle}>{qa.answer}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <RequestAccessModal />
    </PageWrapper>
  );
}

/* ─── styles ─── */

const sectionStyle: React.CSSProperties = {
  background: 'var(--black)',
  padding: '80px 24px',
};

const container: React.CSSProperties = {
  maxWidth: 760,
  margin: '0 auto',
};

const headline: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 48,
  fontWeight: 700,
  color: 'var(--white)',
  marginBottom: 16,
};

const intro: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 17,
  color: 'var(--text-secondary-dark)',
  marginBottom: 48,
};

const groupHeading: React.CSSProperties = {
  fontFamily: 'var(--font-tight)',
  fontSize: 20,
  fontWeight: 600,
  color: 'var(--white)',
  marginTop: 56,
  marginBottom: 32,
  borderTop: '1px solid rgba(255,255,255,0.08)',
  paddingTop: 32,
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
