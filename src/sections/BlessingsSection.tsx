import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';
import { Info, Quote } from 'lucide-react';

export const BlessingsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="blessings" className="section">
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.blessings.sectionTag}</span>
          <h2 className="section-title">{t.blessings.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={28} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.blessings.sectionSubtitle}</p>
        </div>

        {/* Blessings Card */}
        <div
          className="royal-frame"
          style={{
            padding: '3rem 2.5rem',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--color-gold)',
            position: 'relative',
          }}
        >
          {/* Corner Ornaments */}
          <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <RoyalCornerOrnament position="top-left" size={28} />
          </div>
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <RoyalCornerOrnament position="top-right" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
            <RoyalCornerOrnament position="bottom-left" size={28} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <RoyalCornerOrnament position="bottom-right" size={28} />
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(112, 31, 43, 0.08)',
              color: 'var(--color-maroon)',
              marginBottom: '1.25rem',
            }}
          >
            <Quote size={24} />
          </div>

          {/* Blessing Quote */}
          <blockquote
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.25rem, 2.4vw, 1.65rem)',
              fontStyle: 'italic',
              color: 'var(--color-maroon-deep)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            {t.blessings.blessingQuote}
          </blockquote>

          {/* From Families Attribution */}
          <div
            style={{
              fontSize: '1.05rem',
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              color: 'var(--color-gold-dark)',
              letterSpacing: '0.04em',
              marginBottom: '1.5rem',
            }}
          >
            {t.blessings.fromFamilies}
          </div>

          {/* Clearly Marked Placeholder Notice */}
          <div
            className="placeholder-notice"
            style={{
              maxWidth: '620px',
              margin: '0 auto',
              textAlign: 'left',
            }}
          >
            <Info size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
            <span>{t.blessings.placeholderNotice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
