import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { getAssetUrl } from '../utils/assetUrl';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';

export const CoupleSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const groomName = lang === 'mr' ? eventConfig.groom.fullNameMr : eventConfig.groom.fullNameEn;
  const brideName = lang === 'mr' ? eventConfig.bride.fullNameMr : eventConfig.bride.fullNameEn;

  const groomIntro = lang === 'mr' ? eventConfig.groom.introMr : eventConfig.groom.introEn;
  const brideIntro = lang === 'mr' ? eventConfig.bride.introMr : eventConfig.bride.introEn;

  return (
    <section id="couple" className="section section-alt" style={{ padding: '3.5rem 0' }}>
      <div className="container">
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

        {/* Editorial Couple Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '860px',
            margin: '0 auto',
          }}
        >
          {/* Groom Card */}
          <div
            className="royal-frame"
            style={{
              padding: '1.5rem',
              textAlign: 'center',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--color-gold)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={22} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={22} />
            </div>

            {/* Portrait Image */}
            <div
              style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: '1.5px solid var(--color-gold)',
                marginBottom: '1.25rem',
                backgroundColor: 'var(--color-ivory)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <img
                src={getAssetUrl(eventConfig.groom.image)}
                alt={`Portrait of ${groomName}`}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>

            {/* Role Badge */}
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.82rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-dark)',
                marginBottom: '0.25rem',
              }}
            >
              {t.couple.groomRole}
            </span>

            {/* Groom Name */}
            <h3
              style={{
                fontSize: '1.7rem',
                color: 'var(--color-maroon-deep)',
                fontFamily: 'var(--font-heading)',
                marginBottom: '0.4rem',
              }}
            >
              {groomName}
            </h3>

            {/* Professional Role */}
            <p
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--color-charcoal-muted)',
                margin: 0,
              }}
            >
              {groomIntro}
            </p>
          </div>

          {/* Bride Card */}
          <div
            className="royal-frame"
            style={{
              padding: '1.5rem',
              textAlign: 'center',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--color-gold)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={22} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={22} />
            </div>

            {/* Portrait Image */}
            <div
              style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: '1.5px solid var(--color-gold)',
                marginBottom: '1.25rem',
                backgroundColor: 'var(--color-ivory)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <img
                src={getAssetUrl(eventConfig.bride.image)}
                alt={`Portrait of ${brideName}`}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>

            {/* Role Badge */}
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.82rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-dark)',
                marginBottom: '0.25rem',
              }}
            >
              {t.couple.brideRole}
            </span>

            {/* Bride Name */}
            <h3
              style={{
                fontSize: '1.7rem',
                color: 'var(--color-maroon-deep)',
                fontFamily: 'var(--font-heading)',
                marginBottom: '0.4rem',
              }}
            >
              {brideName}
            </h3>

            {/* Professional Role */}
            <p
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--color-charcoal-muted)',
                margin: 0,
              }}
            >
              {brideIntro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
