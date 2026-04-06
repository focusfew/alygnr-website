import { Helmet } from 'react-helmet-async';
import SEO from '../components/ui/SEO';
import PageWrapper from '../components/layout/PageWrapper';
import Nav from '../components/nav/Nav';
import Footer from '../components/sections/Footer';
import RequestAccessModal from '../components/ui/RequestAccessModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Glossary data ─── */

interface Term {
  name: string;
  definition: string;
  trademark?: boolean;
}

interface GlossaryGroup {
  title: string;
  terms: Term[];
}

const groups: GlossaryGroup[] = [
  {
    title: 'Core Concepts',
    terms: [
      {
        name: 'Strategic Intent',
        definition: 'The set of decisions that governs a GTM campaign before execution begins — who you are targeting, what you are promoting, and what you are trying to achieve. It is the anchor that keeps every downstream campaign decision connected to the original strategy rather than drifting with each brief.',
      },
      {
        name: 'Messaging Foundation',
        definition: 'A single, documented source of truth for how a product or company is positioned — covering core value statements, proof points, and the narrative that differentiates the offering. Without it, messaging is recreated from scratch with every campaign, producing inconsistency across channels and teams.',
      },
      {
        name: 'Blueprint',
        definition: 'A recommended campaign architecture derived from a defined strategic intent. It maps which funnel stages to target, what types of plays to run at each stage, and what assets are needed to execute. It gives teams a structured starting point rather than an empty brief.',
      },
      {
        name: 'GTM Play',
        definition: 'A structured campaign motion targeting a specific stage of the buyer journey with a defined objective, channel approach, and asset set. Each play is designed to produce a measurable outcome at its stage of the funnel and inherits the messaging and buyer context from the strategy that created it.',
      },
      {
        name: 'Buyer Forces',
        trademark: true,
        definition: 'The primary motivation driving a prospect\'s evaluation and purchase decision. Buyer Forces shape how messaging should be framed, which value statements will resonate, and which campaign approaches are most likely to move a prospect forward. In ALYGNR, Buyer Forces are a core input to campaign strategy — understanding which force is active for a given audience is what separates targeted execution from generic outreach.',
      },
      {
        name: 'Asset',
        definition: 'Any piece of content or collateral produced within a GTM campaign — blog posts, emails, landing page copy, social content, sales decks, and more. Assets are most effective when created within the context of a specific play, with a defined audience, objective, and message — rather than produced independently and retrofitted to a campaign.',
      },
      {
        name: 'Lines of Business',
        definition: 'A way of organising separate GTM programmes within a single team or account — each with its own strategic intent, messaging, and campaign history. Useful for teams managing multiple products, brands, or market segments that require distinct positioning and execution without creating entirely separate operations.',
      },
    ],
  },
  {
    title: 'Intelligence and Performance',
    terms: [
      {
        name: 'ALYGNR Score',
        definition: 'An execution health metric that reflects how well a GTM motion is performing against its strategic intent. It measures whether campaigns are covering the right funnel stages, whether messaging is consistent, and whether execution is generating the intelligence needed to improve. It is a signal of system health, not just campaign performance.',
      },
      {
        name: 'Insights',
        definition: 'Structured observations derived from campaign execution — identifying gaps in funnel coverage, inconsistencies in messaging, and patterns in what is and is not working. Insights are most valuable when they feed directly into the next campaign cycle, so each iteration builds on what the last one produced.',
      },
      {
        name: 'Execution Health',
        definition: 'The degree to which a campaign or GTM motion accurately reflects the strategy that created it. High execution health means messaging is consistent, funnel coverage is appropriate, and there is clear traceability between strategic decisions and campaign outputs. It is a measure of how well a team translates intent into action.',
      },
      {
        name: 'Optimisation',
        definition: 'The stage in a GTM cycle where intelligence from current execution informs the next round of strategic decisions. Optimisation is what turns a series of disconnected campaigns into a compounding system — each cycle producing structured learnings that make the next cycle more targeted and more effective.',
      },
    ],
  },
  {
    title: 'GTM Strategy',
    terms: [
      {
        name: 'Go-to-Market Strategy',
        definition: 'The set of decisions that determines how an organisation brings a product or service to market — who the target buyer is, what problem is being solved, how the offering is positioned, and which channels will be used to reach buyers. A GTM strategy is the decision layer above a marketing plan. It governs what gets planned and why.',
      },
      {
        name: 'GTM Motion',
        definition: 'The coordinated set of campaigns, plays, and channels a team runs to achieve a specific go-to-market objective. Where a strategy defines the decisions, the GTM motion is the execution of those decisions in market. A well-structured GTM motion has clear funnel coverage, consistent messaging, and a defined feedback loop.',
      },
      {
        name: 'Messaging Consistency',
        definition: 'The degree to which positioning, value statements, and narrative remain coherent across campaigns, channels, and teams. Inconsistent messaging fragments buyer perception and undermines campaign effectiveness — often the result of briefing each campaign independently rather than from a shared strategic foundation.',
      },
      {
        name: 'Funnel Coverage',
        definition: 'Whether a GTM motion has appropriate campaigns and content targeting each stage of the buyer journey — awareness, consideration, and decision. Poor funnel coverage means some stages are under-served, creating gaps that slow pipeline progression regardless of how strong individual campaigns are.',
      },
      {
        name: 'Pipeline Predictability',
        definition: 'The ability to forecast revenue outcomes with confidence based on the consistency and quality of GTM execution. Unpredictable pipeline is usually a symptom of inconsistent execution — campaigns that drift from strategy, messaging that varies by team member, and performance data disconnected from the decisions that drove it.',
      },
    ],
  },
];

/* ─── build DefinedTermSet schema ─── */

const glossarySchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'ALYGNR GTM Glossary',
  hasDefinedTerm: groups.flatMap((g) =>
    g.terms.map((t) => ({
      '@type': 'DefinedTerm' as const,
      name: t.name,
      description: t.definition,
    })),
  ),
};

/* ─── component ─── */

export default function Glossary() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <PageWrapper>
      <SEO
        title="GTM Glossary"
        description="Plain-language definitions of key terms in go-to-market strategy and GTM execution — from Strategic Intent and GTM Plays to Buyer Forces and pipeline predictability."
        canonical="/glossary"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(glossarySchema)}</script>
      </Helmet>
      <Nav />
      <section style={sectionStyle}>
        <div ref={ref} style={container}>
          <div className="eyebrow eyebrow-dark eyebrow-center" style={reveal(0)}>
            <span className="eyebrow-bar" />
            GLOSSARY
          </div>
          <h1 style={{ ...headline, ...reveal(1) }}>The language of structured GTM.</h1>
          <p style={{ ...intro, ...reveal(2) }}>
            Plain-language definitions of key terms in go-to-market strategy and GTM execution.
          </p>

          {groups.map((group) => (
            <div key={group.title} style={reveal(3)}>
              <h2 style={groupHeading}>{group.title}</h2>
              {group.terms.map((term, ti) => {
                const isLast = ti === group.terms.length - 1;
                return (
                  <div key={term.name} style={isLast ? undefined : termWrap}>
                    <h3 style={termName}>
                      {term.name}
                      {term.trademark && (
                        <sup style={{ fontSize: '0.6em', verticalAlign: 'super' }}>&trade;</sup>
                      )}
                    </h3>
                    <p style={termDefinition}>{term.definition}</p>
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

const termName: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 20,
  fontWeight: 600,
  color: 'var(--white)',
  marginBottom: 8,
};

const termDefinition: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 16,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.8,
  marginBottom: 32,
};

const termWrap: React.CSSProperties = {
  borderBottom: '1px solid rgba(255,255,255,0.06)',
};
