import React from 'react';
import { Share2, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { downloadCalendarEvent } from '../utils/calendar';

interface FloatingActionsProps {
  onOpenShare: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenShare }) => {
  const { t } = useLanguage();

  const handleRsvpScroll = () => {
    const rsvpElement = document.querySelector('#rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalendar = () => {
    downloadCalendarEvent(eventConfig);
  };

  return (
    <div
      className="floating-actions-bar"
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 900,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--color-gold)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <button
        type="button"
        onClick={handleRsvpScroll}
        className="btn btn-primary"
        style={{
          padding: '6px 14px',
          fontSize: '0.85rem',
          borderRadius: 'var(--radius-full)',
        }}
      >
        <MessageCircle size={15} />
        <span>{t.nav.rsvp}</span>
      </button>

      <button
        type="button"
        onClick={handleCalendar}
        className="btn btn-gold"
        style={{
          padding: '6px 14px',
          fontSize: '0.85rem',
          borderRadius: 'var(--radius-full)',
        }}
      >
        <Calendar size={15} />
        <span>{t.hero.saveDateBtn}</span>
      </button>

      <button
        type="button"
        onClick={onOpenShare}
        aria-label={t.share.shareBtn}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: 'rgba(112, 31, 43, 0.08)',
          border: '1px solid var(--color-gold)',
          color: 'var(--color-maroon)',
          cursor: 'pointer',
        }}
      >
        <Share2 size={16} />
      </button>

      <style>{`
        @media (min-width: 1024px) {
          .floating-actions-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
