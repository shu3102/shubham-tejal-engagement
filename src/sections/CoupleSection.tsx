import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { getAssetUrl } from '../utils/assetUrl';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';

export const CoupleSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const couplePhoto = eventConfig.coupleImage || eventConfig.groom.image;

  const groomName = lang === 'mr' ? eventConfig.groom.fullNameMr : eventConfig.groom.fullNameEn;
  const brideName = lang === 'mr' ? eventConfig.bride.fullNameMr : eventConfig.bride.fullNameEn;

  return (
    <section id="couple" className="section section-alt" style={{ padding: '3.5rem 0' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">{t.couple.sectionTag}</span>
          <h2 className="section-title">{t.couple.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={26} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.couple.sectionSubtitle}</p>
        </div>

        {/* Unified Couple Card */}
        <div
          className="royal-frame"
          style={{
            padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            position: 'relative',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--color-gold)',
            boxShadow: 'var(--shadow-lg)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          {/* Corner Ornaments */}
          <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
            <RoyalCornerOrnament position="top-left" size={24} />
          </div>
          <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
            <RoyalCornerOrnament position="top-right" size={24} />
          </div>
          <div style={{ position: 'absolute', bottom: '8px', left: '8px' }}>
            <RoyalCornerOrnament position="bottom-left" size={24} />
          </div>
          <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
            <RoyalCornerOrnament position="bottom-right" size={24} />
          </div>

          {/* Couple Photograph Together */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              border: '1.5px solid var(--color-gold)',
              backgroundColor: 'var(--color-ivory)',
              boxShadow: 'var(--shadow-sm)',
              maxHeight: '420px',
            }}
          >
            <img
              src={getAssetUrl(couplePhoto)}
              alt="Shubham & Tejal Together"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '420px',
                objectFit: 'cover',
                display: 'block',
              }}
              loading="lazy"
            />
          </div>

          {/* Elegant Divider between Photo & Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              margin: '1.75rem auto 1.25rem auto',
            }}
          >
            <div style={{ height: '1px', width: '60px', background: 'var(--color-gold-border)' }} />
            <LotusMotif size={22} />
            <div style={{ height: '1px', width: '60px', background: 'var(--color-gold-border)' }} />
          </div>

          {/* Groom & Bride Info Grid */}
          <div
            className="couple-info-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: '1.5rem',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* The Groom */}
            <div style={{ padding: '0.5rem 1rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--color-gold-dark)',
                  marginBottom: '0.3rem',
                }}
              >
                {t.couple.groomRole}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  color: 'var(--color-maroon-deep)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {groomName}
              </h3>
            </div>

            {/* Central Ligature / Divider */}
            <div
              className="couple-center-divider"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontStyle: 'italic',
                color: 'var(--color-gold)',
                padding: '0 0.5rem',
              }}
            >
              &amp;
            </div>

            {/* The Bride */}
            <div style={{ padding: '0.5rem 1rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--color-gold-dark)',
                  marginBottom: '0.3rem',
                }}
              >
                {t.couple.brideRole}
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  color: 'var(--color-maroon-deep)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {brideName}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .couple-info-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .couple-center-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
