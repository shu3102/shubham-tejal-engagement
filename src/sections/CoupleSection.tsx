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

  const groomBio = lang === 'mr' ? eventConfig.groom.bioMr : eventConfig.groom.bioEn;
  const brideBio = lang === 'mr' ? eventConfig.bride.bioMr : eventConfig.bride.bioEn;

  return (
    <section id="couple" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.couple.sectionTag}</span>
          <h2 className="section-title">{t.couple.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={28} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.couple.sectionSubtitle}</p>
        </div>

        {/* Editorial Couple Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
            maxWidth: '1020px',
            margin: '0 auto',
          }}
        >
          {/* Groom Card */}
          <div
            className="royal-frame"
            style={{
              padding: '2.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--color-gold)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={24} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={24} />
            </div>

            <div>
              {/* Portrait Image */}
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: '1.5px solid var(--color-gold)',
                  marginBottom: '1.5rem',
                  backgroundColor: 'var(--color-ivory)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <img
                  src={getAssetUrl(eventConfig.groom.image)}
                  alt={`Portrait of ${groomName}`}
                  style={{
                    width: '100%',
                    height: '380px',
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
                  marginBottom: '0.35rem',
                }}
              >
                {t.couple.groomRole}
              </span>

              {/* Groom Name */}
              <h3
                style={{
                  fontSize: '1.85rem',
                  color: 'var(--color-maroon-deep)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '0.35rem',
                }}
              >
                {groomName}
              </h3>

              {/* Quick Introduction Subtitle */}
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--color-maroon)',
                  backgroundColor: 'rgba(176, 141, 87, 0.12)',
                  border: '1px solid rgba(176, 141, 87, 0.35)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '20px',
                  marginBottom: '1rem',
                  lineHeight: 1.4,
                }}
              >
                {groomIntro}
              </div>

              {/* Short Biography */}
              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--color-charcoal)',
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                {groomBio}
              </p>
            </div>
          </div>

          {/* Bride Card */}
          <div
            className="royal-frame"
            style={{
              padding: '2.25rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--color-gold)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={24} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={24} />
            </div>

            <div>
              {/* Portrait Image */}
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: '1.5px solid var(--color-gold)',
                  marginBottom: '1.5rem',
                  backgroundColor: 'var(--color-ivory)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <img
                  src={getAssetUrl(eventConfig.bride.image)}
                  alt={`Portrait of ${brideName}`}
                  style={{
                    width: '100%',
                    height: '380px',
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
                  marginBottom: '0.35rem',
                }}
              >
                {t.couple.brideRole}
              </span>

              {/* Bride Name */}
              <h3
                style={{
                  fontSize: '1.85rem',
                  color: 'var(--color-maroon-deep)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '0.35rem',
                }}
              >
                {brideName}
              </h3>

              {/* Quick Introduction Subtitle */}
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--color-maroon)',
                  backgroundColor: 'rgba(176, 141, 87, 0.12)',
                  border: '1px solid rgba(176, 141, 87, 0.35)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '20px',
                  marginBottom: '1rem',
                  lineHeight: 1.4,
                }}
              >
                {brideIntro}
              </div>

              {/* Short Biography */}
              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--color-charcoal)',
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                {brideBio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
