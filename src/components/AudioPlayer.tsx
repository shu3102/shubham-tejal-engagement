import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { getAssetUrl } from '../utils/assetUrl';

interface AudioPlayerProps {
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ className = '' }) => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = eventConfig.media.backgroundAudioSrc
    ? getAssetUrl(eventConfig.media.backgroundAudioSrc)
    : '';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      // Gracefully handle missing or unplayable audio file without crashing
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current || hasError || !audioSrc) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      // Browser autoplay policies or missing asset
      setHasError(true);
      setIsPlaying(false);
    }
  };

  if (!audioSrc || hasError) {
    // Graceful disabled/hidden state when audio file is not yet provided
    return (
      <div
        className={`audio-player-disabled ${className}`}
        title={t.audio.noAudioAvailable}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(247, 242, 232, 0.7)',
          border: '1px solid rgba(176, 141, 87, 0.3)',
          color: 'var(--color-charcoal-light)',
          fontSize: '0.8rem',
          cursor: 'not-allowed',
        }}
      >
        <VolumeX size={15} />
        <span className="sr-only">{t.audio.noAudioAvailable}</span>
      </div>
    );
  }

  return (
    <div className={`audio-player-wrapper ${className}`}>
      <audio ref={audioRef} src={audioSrc} loop preload="none" />
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? t.audio.pause : t.audio.play}
        aria-pressed={isPlaying}
        title={isPlaying ? t.audio.pause : t.audio.play}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: 'var(--radius-full)',
          background: isPlaying ? 'var(--color-maroon)' : 'rgba(247, 242, 232, 0.95)',
          color: isPlaying ? '#FFFFFF' : 'var(--color-maroon-deep)',
          border: '1px solid var(--color-gold)',
          boxShadow: isPlaying ? 'var(--shadow-maroon)' : 'var(--shadow-sm)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontSize: '0.85rem',
          fontWeight: 500,
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} className="animate-pulse" style={{ color: '#D4B886' }} />
            <span>{t.audio.pause}</span>
          </>
        ) : (
          <>
            <Music size={16} style={{ color: 'var(--color-gold-dark)' }} />
            <span>{t.audio.play}</span>
          </>
        )}
      </button>
      <div className="sr-only" aria-live="polite">
        {isPlaying ? t.audio.nowPlaying : ''}
      </div>
    </div>
  );
};
