import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { formatWhatsAppUrl, hasValidWhatsAppNumber } from '../utils/whatsapp';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';
import { MessageCircle, Info } from 'lucide-react';

export const RsvpSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const isConfigured = hasValidWhatsAppNumber(eventConfig.rsvp.whatsappNumber);

  const prefilledMessage = t.rsvp.prefilledMessage;

  const whatsappUrl = isConfigured
    ? formatWhatsAppUrl(eventConfig.rsvp.whatsappNumber, prefilledMessage)
    : '';

  const contactFamily =
    lang === 'mr' ? eventConfig.rsvp.contactPersonMr : eventConfig.rsvp.contactPersonEn;

  return (
    <section id="rsvp" className="section">
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.rsvp.sectionTag}</span>
          <h2 className="section-title">{t.rsvp.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={28} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.rsvp.sectionSubtitle}</p>
        </div>

        {/* RSVP Card */}
        <div
          className="royal-frame"
          style={{
            padding: '3rem 2.25rem',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--color-gold)',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
          }}
        >
          {/* Corner Ornaments */}
          <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <RoyalCornerOrnament position="top-left" size={26} />
          </div>
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <RoyalCornerOrnament position="top-right" size={26} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
            <RoyalCornerOrnament position="bottom-left" size={26} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <RoyalCornerOrnament position="bottom-right" size={26} />
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              boxShadow: '0 6px 18px rgba(37, 211, 102, 0.35)',
              marginBottom: '1.25rem',
            }}
          >
            <MessageCircle size={28} />
          </div>

          <h3
            style={{
              fontSize: '1.85rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-maroon-deep)',
              marginBottom: '0.75rem',
            }}
          >
            {contactFamily}
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-charcoal-muted)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
            }}
          >
            {t.rsvp.warmMessage}
          </p>

          {/* WhatsApp RSVP Action */}
          {isConfigured ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                fontSize: '1.05rem',
                padding: '0.95rem 2.2rem',
                boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
                fontWeight: 600,
              }}
            >
              <MessageCircle size={20} />
              <span>{t.rsvp.whatsappBtn}</span>
            </a>
          ) : (
            <div style={{ maxWidth: '580px', margin: '0 auto' }}>
              <button
                type="button"
                disabled
                className="btn"
                style={{
                  backgroundColor: 'rgba(37, 211, 102, 0.4)',
                  color: '#FFFFFF',
                  fontSize: '1.05rem',
                  padding: '0.95rem 2.2rem',
                  cursor: 'not-allowed',
                  border: 'none',
                }}
              >
                <MessageCircle size={20} />
                <span>{t.rsvp.whatsappBtn}</span>
              </button>

              <div
                className="placeholder-notice"
                style={{
                  textAlign: 'left',
                  marginTop: '1.25rem',
                }}
              >
                <Info size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>{t.rsvp.placeholderNotice}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
