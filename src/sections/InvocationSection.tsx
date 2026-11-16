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
        paddingTop: 'calc(var(--header-height) + 1.25rem)',
        paddingBottom: '1rem',
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
            padding: '1.25rem 1.5rem',
            position: 'relative',
          }}
        >
          {/* Corner Ornaments */}
          <div style={{ position: 'absolute', top: '6px', left: '6px' }}>
            <RoyalCornerOrnament position="top-left" size={22} />
          </div>
          <div style={{ position: 'absolute', top: '6px', right: '6px' }}>
            <RoyalCornerOrnament position="top-right" size={22} />
          </div>
          <div style={{ position: 'absolute', bottom: '6px', left: '6px' }}>
            <RoyalCornerOrnament position="bottom-left" size={22} />
          </div>
          <div style={{ position: 'absolute', bottom: '6px', right: '6px' }}>
            <RoyalCornerOrnament position="bottom-right" size={22} />
          </div>

          {/* Ganesha Linework Motif */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '0.4rem',
            }}
          >
            <GaneshaMotif size={42} className="animate-float" />
          </div>

          {/* Sacred Mantra */}
          <h2
            style={{
              fontFamily: 'var(--font-heading-mr)',
              fontSize: 'clamp(1.4rem, 3.2vw, 2.1rem)',
              color: 'var(--color-maroon-deep)',
              fontWeight: 700,
              letterSpacing: '0.04em',
              margin: '0.1rem 0 0.4rem 0',
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
              gap: '10px',
              margin: '0 auto 0.5rem auto',
            }}
          >
            <div style={{ height: '1px', width: '35px', background: 'var(--color-gold)' }} />
            <MangalKalashMotif size={20} />
            <div style={{ height: '1px', width: '35px', background: 'var(--color-gold)' }} />
          </div>

          {/* Sacred Invocation Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              color: 'var(--color-charcoal-muted)',
              lineHeight: 1.5,
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
