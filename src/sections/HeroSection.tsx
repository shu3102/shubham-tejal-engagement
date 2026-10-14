import React from 'react';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { getAssetUrl } from '../utils/assetUrl';
import { downloadCalendarEvent } from '../utils/calendar';
import { CountdownTimer } from '../components/CountdownTimer';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';

export const HeroSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const coupleNames =
    lang === 'mr' ? eventConfig.displayCoupleNames.mr : eventConfig.displayCoupleNames.en;

  const ceremonyName =
    lang === 'mr' ? eventConfig.ceremony.nameMr : eventConfig.ceremony.nameEn;

  const fullDate =
    lang === 'mr' ? eventConfig.date.fullDateMr : eventConfig.date.fullDateEn;

  const timeLabel =
    lang === 'mr' ? eventConfig.date.timeMr : eventConfig.date.timeEn;

  const venueName =
    lang === 'mr' ? eventConfig.venue.nameMr : eventConfig.venue.nameEn;

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#couple');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveDate = () => {
    downloadCalendarEvent(eventConfig);
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 0 5rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="royal-frame"
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6EE 100%)',
            border: '2px solid var(--color-gold)',
            boxShadow: 'var(--shadow-lg)',
            padding: 'clamp(1.75rem, 4vw, 3.5rem)',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Royal Corner Ornaments */}
          <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <RoyalCornerOrnament position="top-left" size={36} />
          </div>
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <RoyalCornerOrnament position="top-right" size={36} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
            <RoyalCornerOrnament position="bottom-left" size={36} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <RoyalCornerOrnament position="bottom-right" size={36} />
          </div>

          {/* Ceremony Label Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.4rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(112, 31, 43, 0.08)',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-maroon)',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            <Sparkles size={16} style={{ color: 'var(--color-gold)' }} />
            <span>{ceremonyName}</span>
          </div>

          {/* Main Couple Names */}
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.2rem)',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-maroon-deep)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              margin: '0.2rem 0 1rem 0',
              textShadow: '0 2px 12px rgba(112, 31, 43, 0.08)',
            }}
          >
            {coupleNames}
          </h1>

          {/* Proposed Tagline */}
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.15rem, 2.2vw, 1.55rem)',
              fontStyle: 'italic',
              color: 'var(--color-gold-dark)',
              marginBottom: '1rem',
            }}
          >
            “{t.hero.tagline}”
          </p>

          {/* Decorative Divider */}
          <div className="divider-motif">
            <div className="divider-line" style={{ width: '70px' }} />
            <LotusMotif size={32} />
            <div className="divider-line" style={{ width: '70px' }} />
          </div>

          {/* Large Hero Couple Photograph Frame */}
          <div
            style={{
              maxWidth: '820px',
              margin: '1.5rem auto 2rem auto',
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '2px solid var(--color-gold)',
              boxShadow: '0 12px 30px rgba(63, 53, 47, 0.12)',
            }}
          >
            <img
              src={getAssetUrl('assets/images/placeholders/hero-placeholder.svg')}
              alt="Shubham & Tejal Couple Portrait Placeholder"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '480px',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Traditional Invitation Wording */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: 'var(--color-charcoal-muted)',
              lineHeight: 1.75,
              maxWidth: '720px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            {t.hero.subTagline}
          </p>

          {/* Date & Venue Highlight Box */}
          <div
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(247, 242, 232, 0.95)',
              border: '1px solid var(--color-gold-border)',
              margin: '0 auto 1.75rem auto',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 600,
                color: 'var(--color-maroon)',
                marginBottom: '0.2rem',
              }}
            >
              {fullDate} • {timeLabel}
            </div>
            <div
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-charcoal-muted)',
              }}
            >
              {venueName}
            </div>
          </div>

          {/* Live Countdown Timer */}
          <div>
            <CountdownTimer />
          </div>

          {/* Prominent Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2.5rem',
            }}
          >
            <a
              href="#couple"
              onClick={handleExplore}
              className="btn btn-primary"
              style={{ fontSize: '1.05rem', padding: '0.95rem 2.2rem' }}
            >
              <span>{t.hero.exploreBtn}</span>
              <ChevronDown size={18} />
            </a>

            <button
              type="button"
              onClick={handleSaveDate}
              className="btn btn-gold"
              style={{ fontSize: '1.05rem', padding: '0.95rem 2rem' }}
            >
              <Calendar size={18} />
              <span>{t.hero.saveDateBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
