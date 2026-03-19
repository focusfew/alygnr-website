import { useState } from 'react';

import Salesforce from '../../assets/integrations/Salesforce.svg'
import Slack from '../../assets/integrations/Slack.svg'
import HubSpot from '../../assets/integrations/HubSpot.svg'
import LinkedIn from '../../assets/integrations/LinkedIn.svg'
import Mailchimp from '../../assets/integrations/Mailchimp.svg'
import GA4 from '../../assets/integrations/GA4.svg'
import GoogleAds from '../../assets/integrations/Google-Ads.svg'

const logos = [
  { name: 'Salesforce', icon: Salesforce, comingSoon: false },
  { name: 'Slack', icon: Slack, comingSoon: false },
  { name: 'HubSpot', icon: HubSpot, comingSoon: false },
  { name: 'LinkedIn', icon: LinkedIn, comingSoon: false },
  { name: 'Mailchimp', icon: Mailchimp, comingSoon: false },
  { name: 'GA4', icon: GA4, comingSoon: false },
  { name: 'Google Ads', icon: GoogleAds, comingSoon: true },
];

const greyFilter = 'brightness(0) saturate(100%) invert(70%)';

function LogoItem({ item }: { item: typeof logos[number] }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <span
      style={{
        ...logoStyle,
        opacity: item.comingSoon ? 0.4 : undefined,
      }}
      className="int-logo"
    >
      {imgFailed ? (
        <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-secondary-light)' }}>
          {item.name}
        </span>
      ) : (
        <img
          src={item.icon}
          alt={item.name}
          style={{ height: 28, width: 'auto', display: 'block', filter: greyFilter }}
          onError={() => setImgFailed(true)}
        />
      )}
      {item.comingSoon && (
        <span style={{ fontSize: 10, color: 'var(--text-secondary-light)', marginTop: 4 }}>
          Coming soon
        </span>
      )}
    </span>
  );
}

export default function Integrations() {
  const doubled = [...logos, ...logos];

  return (
    <section style={section}>
      <div className="eyebrow eyebrow-light" style={{ justifyContent: 'center' }}>
        WORKS WITH YOUR GTM STACK
      </div>
      <div style={marqueeWrap}>
        <div style={marqueeTrack} className="int-marquee-track">
          {doubled.map((item, i) => (
            <LogoItem key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .int-marquee-track {
          animation: marquee-scroll 25s linear infinite;
        }
        .int-logo {
          opacity: 0.55;
          transition: opacity 180ms, color 180ms;
        }
        .int-logo:hover {
          opacity: 1;
          color: var(--text-primary-light) !important;
        }
      `}</style>
    </section>
  );
}

const section: React.CSSProperties = {
  background: 'var(--cream)',
  padding: '32px 24px 64px',
  textAlign: 'center',
};

const marqueeWrap: React.CSSProperties = {
  overflow: 'hidden',
  maxWidth: 1080,
  margin: '0 auto',
};

const marqueeTrack: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 48,
  whiteSpace: 'nowrap',
  willChange: 'transform',
};

const logoStyle: React.CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  cursor: 'default',
  flexShrink: 0,
};
