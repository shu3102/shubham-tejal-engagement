import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { calculateTimeRemaining, CountdownResult } from '../utils/countdown';
import { Clock, Sparkles } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<CountdownResult>(() =>
    calculateTimeRemaining(eventConfig.date.targetIsoTimestamp)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(eventConfig.date.targetIsoTimestamp));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isPast) {
    return (
      <div
        className="countdown-banner"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '1rem 2rem',
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid var(--color-gold)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)',
          color: 'var(--color-maroon)',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
        }}
      >
        <Sparkles size={20} style={{ color: 'var(--color-gold)' }} />
        <span>{t.countdown.eventEnded}</span>
      </div>
    );
  }

  if (timeLeft.isLive) {
    return (
      <div
        className="countdown-banner"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '1rem 2rem',
          background: 'var(--color-maroon)',
          color: '#FFFFFF',
          border: '1px solid var(--color-gold)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-maroon)',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          animation: 'pulseGold 2s infinite',
        }}
      >
        <Sparkles size={20} style={{ color: '#D4B886' }} />
        <span>{t.countdown.eventLive}</span>
      </div>
    );
  }

  const timeBlocks = [
    { label: t.countdown.days, value: timeLeft.days },
    { label: t.countdown.hours, value: timeLeft.hours },
    { label: t.countdown.minutes, value: timeLeft.minutes },
    { label: t.countdown.seconds, value: timeLeft.seconds },
  ];

  return (
    <div
      className="countdown-container"
      style={{
        display: 'inline-block',
        margin: '1.5rem auto 0 auto',
      }}
      aria-label={`Countdown to Sakharpuda: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes`}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '0.85rem',
          color: 'var(--color-gold-dark)',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 600,
        }}
      >
        <Clock size={15} />
        <span>Countdown to Auspicious Muhurt</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(70px, 92px))',
          gap: '0.85rem',
        }}
      >
        {timeBlocks.map((block, idx) => (
          <div
            key={idx}
            className="countdown-card"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-gold)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 0.5rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--color-maroon)',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-heading-en)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 700,
                color: 'var(--color-maroon-deep)',
                lineHeight: 1.1,
              }}
            >
              {String(block.value).padStart(2, '0')}
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                color: 'var(--color-charcoal-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '0.25rem',
                fontWeight: 500,
              }}
            >
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
