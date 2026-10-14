import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { GaneshaMotif, MangalKalashMotif, RoyalCornerOrnament } from '../components/Motifs';

export const InvocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="invocation"
      className="invocation-section"
      style={{
        paddingTop: 'calc(var(--header-height) + 2.5rem)',
        paddingBottom: '2rem',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: 'var(--color-ivory)',
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        <div
          className="royal-frame animate-fade-in"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FDFBF7 100%)',
            border: '1.5px solid var(--color-gold)',
            padding: '2.5rem 2rem',
            position: 'relative',
          }}
        >
          {/* Corner Ornaments */}
          <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
            <RoyalCornerOrnament position="top-left" size={28} />
          </div>
          <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
            <RoyalCornerOrnament position="top-right" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '8px', left: '8px' }}>
            <RoyalCornerOrnament position="bottom-left" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
            <RoyalCornerOrnament position="bottom-right" size={28} />
          </div>

          {/* Ganesha Linework Motif */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <GaneshaMotif size={56} className="animate-float" />
          </div>

          {/* Sacred Mantra */}
          <h2
            style={{
              fontFamily: 'var(--font-heading-mr)',
              fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)',
              color: 'var(--color-maroon-deep)',
              fontWeight: 700,
              letterSpacing: '0.04em',
              margin: '0.2rem 0 0.8rem 0',
            }}
          >
            {t.invocation.mantra}
          </h2>

          {/* Gold Linework Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              margin: '0 auto 1.1rem auto',
            }}
          >
            <div style={{ height: '1px', width: '40px', background: 'var(--color-gold)' }} />
            <MangalKalashMotif size={24} />
            <div style={{ height: '1px', width: '40px', background: 'var(--color-gold)' }} />
          </div>

          {/* Sacred Invocation Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-charcoal-muted)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {t.invocation.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
