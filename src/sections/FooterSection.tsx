import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { LotusMotif } from '../components/Motifs';
import { ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const coupleNames =
    lang === 'mr' ? eventConfig.displayCoupleNames.mr : eventConfig.displayCoupleNames.en;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-gold)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Decorative Lotus */}
        <div style={{ marginBottom: '1.25rem' }}>
          <LotusMotif size={36} className="animate-float" />
        </div>

        {/* Closing Title */}
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
            color: 'var(--color-maroon-deep)',
            fontWeight: 700,
            marginBottom: '0.4rem',
          }}
        >
          {coupleNames}
        </h2>

        {/* Date & Location */}
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.15rem',
            color: 'var(--color-gold-dark)',
            letterSpacing: '0.08em',
            marginBottom: '1.25rem',
          }}
        >
          {t.footer.closingSubtitle}
        </p>

        {/* Poetic Blessings Line */}
        <p
          style={{
            fontFamily: 'var(--font-heading-mr)',
            fontSize: '1.25rem',
            fontStyle: 'italic',
            color: 'var(--color-maroon)',
            marginBottom: '2rem',
          }}
        >
          {t.footer.blessingsText}
        </p>

        {/* Back to top button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.footer.backToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(247, 242, 232, 0.9)',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-maroon)',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <ArrowUp size={16} />
            <span>{t.footer.backToTop}</span>
          </button>
        </div>

        {/* Bottom Credits & Paithani Strip */}
        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--color-charcoal-muted)',
            borderTop: '1px solid var(--color-gold-border)',
            paddingTop: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <span>{t.footer.madeWithLove}</span>
        </div>
      </div>

      <div className="paithani-strip" style={{ marginTop: '2.5rem' }} />
    </footer>
  );
};
