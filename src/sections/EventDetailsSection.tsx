import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { downloadCalendarEvent } from '../utils/calendar';
import { MangalKalashMotif, RoyalCornerOrnament } from '../components/Motifs';
import { Calendar, Clock, MapPin, Navigation, Download, ExternalLink, Info } from 'lucide-react';

export const EventDetailsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const fullDate = lang === 'mr' ? eventConfig.date.fullDateMr : eventConfig.date.fullDateEn;
  const timeLabel = lang === 'mr' ? eventConfig.date.timeMr : eventConfig.date.timeEn;
  const venueName = lang === 'mr' ? eventConfig.venue.nameMr : eventConfig.venue.nameEn;
  const venueAddress =
    lang === 'mr' ? eventConfig.venue.addressLineMr : eventConfig.venue.addressLineEn;

  const hasMapUrl = Boolean(
    eventConfig.venue.googleMapsUrl &&
      eventConfig.venue.googleMapsUrl.trim() !== '' &&
      eventConfig.venue.googleMapsUrl !== '#'
  );

  const handleDirectionsClick = () => {
    if (hasMapUrl) {
      window.open(eventConfig.venue.googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownloadCalendar = () => {
    downloadCalendarEvent(eventConfig);
  };

  return (
    <section id="details" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.details.sectionTag}</span>
          <h2 className="section-title">{t.details.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <MangalKalashMotif size={32} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.details.sectionSubtitle}</p>
        </div>

        {/* Event Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1060px',
            margin: '0 auto',
          }}
        >
          {/* Date & Time Card */}
          <div
            className="royal-frame"
            style={{
              padding: '2.5rem 2rem',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--color-gold)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={24} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={24} />
            </div>

            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'rgba(112, 31, 43, 0.08)',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-maroon)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Calendar size={24} />
            </div>

            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-gold-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.3rem',
              }}
            >
              {t.details.dateLabel} &amp; {t.details.timeLabel}
            </span>

            <h3
              style={{
                fontSize: '1.7rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-maroon-deep)',
                marginBottom: '0.5rem',
              }}
            >
              {fullDate}
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-charcoal)',
                fontSize: '1.05rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              <Clock size={18} style={{ color: 'var(--color-gold)' }} />
              <span>{timeLabel}</span>
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-charcoal-muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                flexGrow: 1,
              }}
            >
              {lang === 'mr'
                ? 'शुभ मुहूर्तावर उपस्थित राहून शुभम आणि तेजल यांच्या नव्या वाटचालीस आपले आशीर्वाद द्यावेत.'
                : 'We request the pleasure of your company to bless Shubham and Tejal as they begin their sacred journey.'}
            </p>

            <button
              type="button"
              onClick={handleDownloadCalendar}
              className="btn btn-gold"
              style={{ width: '100%', marginTop: 'auto' }}
            >
              <Download size={18} />
              <span>{t.details.addToCalendarBtn}</span>
            </button>
          </div>

          {/* Venue & Location Card */}
          <div
            className="royal-frame"
            style={{
              padding: '2.5rem 2rem',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--color-gold)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
              <RoyalCornerOrnament position="top-left" size={24} />
            </div>
            <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
              <RoyalCornerOrnament position="top-right" size={24} />
            </div>

            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'rgba(112, 31, 43, 0.08)',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-maroon)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <MapPin size={24} />
            </div>

            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-gold-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.3rem',
              }}
            >
              {t.details.venueLabel}
            </span>

            <h3
              style={{
                fontSize: '1.7rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-maroon-deep)',
                marginBottom: '0.5rem',
              }}
            >
              {venueName}
            </h3>

            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--color-charcoal-muted)',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
                flexGrow: 1,
              }}
            >
              {venueAddress}
            </p>

            {/* Directions Action */}
            {hasMapUrl ? (
              <button
                type="button"
                onClick={handleDirectionsClick}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 'auto' }}
              >
                <Navigation size={18} />
                <span>{t.details.getDirectionsBtn}</span>
                <ExternalLink size={15} style={{ opacity: 0.8 }} />
              </button>
            ) : (
              <div style={{ marginTop: 'auto' }}>
                <button
                  type="button"
                  disabled
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    opacity: 0.7,
                    cursor: 'not-allowed',
                    backgroundColor: 'rgba(247, 242, 232, 0.7)',
                  }}
                >
                  <Navigation size={18} />
                  <span>{t.details.getDirectionsBtn}</span>
                </button>

                <div className="placeholder-notice" style={{ marginTop: '0.85rem' }}>
                  <Info size={15} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{t.details.mapPlaceholderNotice}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
