import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';

export const FooterSection: React.FC = () => {
  const { lang } = useLanguage();

  const coupleNames =
    lang === 'mr' ? eventConfig.displayCoupleNames.mr : eventConfig.displayCoupleNames.en;

  const familyName =
    lang === 'mr' ? eventConfig.rsvp.contactPersonMr : eventConfig.rsvp.contactPersonEn;

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-gold-border)',
        padding: '2.25rem 1.5rem 2.75rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '680px' }}>
        {/* Line 1: Couple Names, Date & Venue City */}
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
            fontWeight: 700,
            color: 'var(--color-maroon-deep)',
            letterSpacing: '0.04em',
            margin: '0 0 0.4rem 0',
          }}
        >
          {coupleNames} • {lang === 'mr' ? '१२ डिसेंबर २०२६ • नाशिक' : '12 December 2026 • Nashik'}
        </p>

        {/* Line 2: Warm Regards & Blessings */}
        <p
          style={{
            fontSize: '0.94rem',
            color: 'var(--color-gold-dark)',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '0.02em',
          }}
        >
          {lang === 'mr'
            ? `सस्नेह शुभाशीर्वाद — ${familyName}`
            : `With warm regards & blessings — ${familyName}`}
        </p>
      </div>

      {/* Traditional Paithani Border Accent */}
      <div
        className="paithani-strip"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </footer>
  );
};
