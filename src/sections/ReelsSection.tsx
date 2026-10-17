import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { reelItems } from '../content/reels';
import { ReelItem } from '../content/types';
import { getAssetUrl } from '../utils/assetUrl';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';
import {
  Play,
  X,
  Volume2,

  VolumeX,
  ChevronLeft,
  ChevronRight,
  Loader2,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

export const ReelsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  // Active reel being viewed in the full-screen reel modal (null = closed)
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);

  // Modal player states
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const activeReel: ReelItem | null =
    activeReelIndex !== null ? reelItems[activeReelIndex] : null;

  const handleOpenReel = (index: number) => {
    setActiveReelIndex(index);
    setIsPlaying(true);
    setIsBuffering(true);
  };

  const handleCloseModal = useCallback(() => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveReelIndex(null);
    setIsPlaying(false);
    setIsBuffering(false);
  }, []);

  const handleNextReel = useCallback(() => {
    if (activeReelIndex === null) return;
    const nextIdx = (activeReelIndex + 1) % reelItems.length;
    setActiveReelIndex(nextIdx);
    setIsPlaying(true);
    setIsBuffering(true);
  }, [activeReelIndex]);

  const handlePrevReel = useCallback(() => {
    if (activeReelIndex === null) return;
    const prevIdx = (activeReelIndex - 1 + reelItems.length) % reelItems.length;
    setActiveReelIndex(prevIdx);
    setIsPlaying(true);
    setIsBuffering(true);
  }, [activeReelIndex]);

  const togglePlayPause = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!modalVideoRef.current) return;
    const nextMuted = !modalVideoRef.current.muted;
    modalVideoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!modalVideoRef.current) return;
    modalVideoRef.current.currentTime = 0;
    modalVideoRef.current.play();
    setIsPlaying(true);
  };

  // Keyboard navigation for Modal
  useEffect(() => {
    if (activeReelIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        handleNextReel();
      } else if (e.key === 'ArrowLeft') {
        handlePrevReel();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeReelIndex, handleCloseModal, handleNextReel, handlePrevReel, isPlaying]);

  // Video time update
  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
      setDuration(modalVideoRef.current.duration || 0);
    }
  };

  const formatSeconds = (sec: number) => {
    if (isNaN(sec) || sec === 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="reels" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
            <span>{t.reels.sectionTag}</span>
          </span>
          <h2 className="section-title">{t.reels.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={28} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.reels.sectionSubtitle}</p>
        </div>

        {/* 9:16 Vertical Video Reels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 340px))',
            justifyContent: 'center',
            gap: '2.5rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {reelItems.map((reel, index) => {
            const title = lang === 'mr' ? reel.titleMr : reel.titleEn;
            const subtitle = lang === 'mr' ? reel.subtitleMr : reel.subtitleEn;
            const tag = lang === 'mr' ? reel.tagMr : reel.tagEn;


            return (
              <div
                key={reel.id}
                className="royal-frame reel-card"
                onClick={() => handleOpenReel(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenReel(index);
                  }
                }}
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid var(--color-gold)',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Corner Ornaments */}
                <div style={{ position: 'absolute', top: '6px', left: '6px', zIndex: 1 }}>
                  <RoyalCornerOrnament position="top-left" size={18} />
                </div>
                <div style={{ position: 'absolute', top: '6px', right: '6px', zIndex: 1 }}>
                  <RoyalCornerOrnament position="top-right" size={18} />
                </div>

                {/* 9:16 Card Thumbnail Container (Zero Video Loaded on Page Load!) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '177.77%', // 9:16 ratio
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: '#1E1214',
                    border: '1px solid var(--color-gold)',
                  }}
                >
                  <img
                    src={getAssetUrl(reel.poster)}
                    alt={`${title} thumbnail`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    loading="lazy"
                  />

                  {/* Dark gradient vignette */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(20,10,12,0.7) 100%)',
                      zIndex: 2,
                    }}
                  />

                  {/* Top Category Tag Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(20, 10, 12, 0.75)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid var(--color-gold)',
                      color: '#F7F2E8',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      zIndex: 3,
                    }}
                  >
                    {tag}
                  </div>

                  {/* Duration Badge */}
                  {reel.duration && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        color: '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        zIndex: 3,
                      }}
                    >
                      {reel.duration}
                    </div>
                  )}

                  {/* Center Play Button Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3,
                      gap: '8px',
                    }}
                  >
                    <div
                      className="reel-play-button"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'rgba(112, 31, 43, 0.92)',
                        border: '2px solid var(--color-gold)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(112, 31, 43, 0.5), 0 0 15px rgba(176, 141, 87, 0.4)',
                        transition: 'transform 0.25s ease, background 0.25s ease',
                      }}
                    >
                      <Play size={26} style={{ marginLeft: '3px', fill: '#FFFFFF' }} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {lang === 'mr' ? 'रील उघडा' : 'Watch Reel'}
                    </span>
                  </div>
                </div>

                {/* Reel Info */}
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-maroon-deep)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--color-charcoal-muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================================
          FULL-SCREEN VERTICAL REEL VIEWER MODAL
          Loads video stream ONLY when visitor clicks to open!
         ====================================================================== */}
      {activeReel !== null && activeReelIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'mr' ? activeReel.titleMr : activeReel.titleEn}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 7, 9, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleCloseModal}
            aria-label="Close reel viewer (Escape)"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1.5px solid var(--color-gold)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 0.2s',
            }}
          >
            <X size={24} />
          </button>

          {/* Navigation Controls: Previous Reel */}
          <button
            type="button"
            onClick={handlePrevReel}
            aria-label="Previous reel (Left arrow)"
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1.5px solid var(--color-gold)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 0.2s',
            }}
            className="reel-nav-btn"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Navigation Controls: Next Reel */}
          <button
            type="button"
            onClick={handleNextReel}
            aria-label="Next reel (Right arrow)"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1.5px solid var(--color-gold)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 0.2s',
            }}
            className="reel-nav-btn"
          >
            <ChevronRight size={28} />
          </button>

          {/* 9:16 Vertical Reel Player Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '430px',
              height: '88vh',
              maxHeight: '760px',
              borderRadius: '18px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              border: '2px solid var(--color-gold)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(176, 141, 87, 0.25)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* The Video Element (Only loaded and mounted upon clicking open) */}
            <video
              ref={modalVideoRef}
              src={getAssetUrl(activeReel.src)}
              poster={getAssetUrl(activeReel.poster)}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              onWaiting={() => setIsBuffering(true)}
              onPlaying={() => setIsBuffering(false)}
              onCanPlay={() => setIsBuffering(false)}
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlayPause}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                cursor: 'pointer',
              }}
            />

            {/* Buffering Spinner */}
            {isBuffering && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.4)',
                  zIndex: 10,
                  pointerEvents: 'none',
                }}
              >
                <Loader2 size={44} className="animate-spin" style={{ color: 'var(--color-gold)' }} />
              </div>
            )}

            {/* Play/Pause indicator overlay when paused */}
            {!isPlaying && !isBuffering && (
              <div
                onClick={togglePlayPause}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.35)',
                  cursor: 'pointer',
                  zIndex: 8,
                }}
              >
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(112, 31, 43, 0.95)',
                    border: '2px solid var(--color-gold)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-gold)',
                  }}
                >
                  <Play size={32} style={{ marginLeft: '4px', fill: '#FFFFFF' }} />
                </div>
              </div>
            )}

            {/* Top Reel Info Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                padding: '16px 18px',
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, transparent 100%)',
                zIndex: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pointerEvents: 'none',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-maroon)',
                    border: '1px solid var(--color-gold)',
                    color: '#F7F2E8',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {lang === 'mr' ? activeReel.tagMr : activeReel.tagEn}
                </span>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-heading)',
                    margin: 0,
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                  }}
                >
                  {lang === 'mr' ? activeReel.titleMr : activeReel.titleEn}
                </h4>
              </div>

              {/* Sound & Replay action buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  pointerEvents: 'auto',
                }}
              >
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.65)',
                    border: '1px solid var(--color-gold)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>

                <button
                  type="button"
                  onClick={handleReplay}
                  aria-label="Replay from start"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.65)',
                    border: '1px solid var(--color-gold)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* Bottom Progress Bar & Time */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px 18px',
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                zIndex: 12,
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                    backgroundColor: 'var(--color-gold)',
                    transition: 'width 0.1s linear',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-body)',
                }}
              >
                <span>
                  {formatSeconds(currentTime)} / {formatSeconds(duration)}
                </span>
                <span style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>
                  Reel {activeReelIndex + 1} of {reelItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .reel-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(112, 31, 43, 0.18);
        }
        .reel-card:hover img {
          transform: scale(1.04);
        }
        .reel-card:hover .reel-play-button {
          transform: scale(1.1);
          background: var(--color-maroon) !important;
          border-color: #DFC498 !important;
        }
        @media (max-width: 640px) {
          .reel-nav-btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
