import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { getAssetUrl } from '../utils/assetUrl';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';
import { Info } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const groomName = lang === 'mr' ? eventConfig.groom.fullNameMr : eventConfig.groom.fullNameEn;
  const brideName = lang === 'mr' ? eventConfig.bride.fullNameMr : eventConfig.bride.fullNameEn;

  const groomBio =
    lang === 'mr' ? eventConfig.groom.aboutPlaceholderMr : eventConfig.groom.aboutPlaceholderEn;
  const brideBio =
    lang === 'mr' ? eventConfig.bride.aboutPlaceholderMr : eventConfig.bride.aboutPlaceholderEn;

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
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={24} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={24} />
            </div>

            <div>
              {/* Portrait Image Placeholder */}
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
                  marginBottom: '0.4rem',
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
                  marginBottom: '1rem',
                }}
              >
                {groomName}
              </h3>

              {/* Groom Bio Placeholder Notice */}
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-charcoal-muted)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                {groomBio}
              </p>
            </div>

            <div className="placeholder-notice" style={{ marginTop: '1.5rem' }}>
              <Info size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>{t.couple.placeholderNote}</span>
            </div>
          </div>

          {/* Bride Card */}
          <div
            className="royal-frame"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={24} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={24} />
            </div>

            <div>
              {/* Portrait Image Placeholder */}
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
                  marginBottom: '0.4rem',
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
                  marginBottom: '1rem',
                }}
              >
                {brideName}
              </h3>

              {/* Bride Bio Placeholder Notice */}
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-charcoal-muted)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                {brideBio}
              </p>
            </div>

            <div className="placeholder-notice" style={{ marginTop: '1.5rem' }}>
              <Info size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>{t.couple.placeholderNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
