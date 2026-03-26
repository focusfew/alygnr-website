import { useScrollReveal } from '../../../hooks/useScrollReveal';
import SectionWrapper from '../../layout/SectionWrapper';

export default function CompanyConviction() {
  const { ref, reveal } = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper bg="black" padding="0px 24px 56px">
      <div ref={ref} style={wrapper}>
        <div className="eyebrow eyebrow-dark" style={reveal(0)}>
          WHY WE BUILT THIS
        </div>

        <div style={{ ...bodyWrap, ...reveal(1) }}>
          <p style={para}>
            The gap between marketing strategy and marketing execution is not a people problem.
            It is a systems problem. Strategy gets decided in a room and reinterpreted by every
            person who touches it on the way to the buyer. By the time a campaign ships, the
            original intent is unrecognisable.
          </p>
          <p style={para}>
            The teams that get GTM right are not the ones with the biggest budgets or the most
            headcount. They are the ones with the most structured foundation. A shared messaging
            core. A clear strategic intent that governs every execution decision. A system that
            compounds rather than resets.
          </p>
          <p style={{ ...para, marginBottom: 0 }}>
            ALYGNR was built out of direct GTM consulting work — frameworks developed across
            real B2B engagements, not borrowed from playbooks. We took what worked in practice
            and embedded it into a system that any team can use.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

const wrapper: React.CSSProperties = {
  maxWidth: 760,
  margin: '0 auto',
};

const bodyWrap: React.CSSProperties = {
  maxWidth: 680,
};

const para: React.CSSProperties = {
  fontFamily: 'var(--font-base)',
  fontSize: 18,
  color: 'var(--text-secondary-dark)',
  lineHeight: 1.8,
  marginBottom: 32,
};
