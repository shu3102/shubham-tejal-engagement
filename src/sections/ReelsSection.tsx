import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { reelItems } from '../content/reels';
import { getAssetUrl } from '../utils/assetUrl';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';
import { Play, Pause, Info, Loader2, Volume2, VolumeX, RotateCcw } from 'lucide-react';

export const ReelsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  // Track which reel is currently loaded into DOM (only load when clicked)
  const [loadedReels, setLoadedReels] = useState<{ [id: string]: boolean }>({});
  // Track which reel is actively playing
  const [playingId, setPlayingId] = useState<string | null>(null);
  // Track buffering/loading state per reel
  const [bufferingId, setBufferingId] = useState<string | null>(null);
  // Track muted state per reel
  const [isMuted, setIsMuted] = useState(false);

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handlePlayClick = (id: string, hasSrc: boolean) => {
    if (!hasSrc) return;

    // If reel is not yet loaded into DOM, load it now on user intent
    if (!loadedReels[id]) {
      setLoadedReels((prev) => ({ ...prev, [id]: true }));
      setBufferingId(id);
      setPlayingId(id);
      return;
    }

    const currentVideo = videoRefs.current[id];
    if (!currentVideo) return;

    if (playingId === id) {
      currentVideo.pause();
      setPlayingId(null);
    } else {
      // Pause any previously playing reel
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      currentVideo.play().then(() => {
        setPlayingId(id);
      }).catch(() => {
        // autoplay restriction
      });
    }
  };

  const handleVideoLoadedData = (id: string) => {
    setBufferingId(null);
    const video = videoRefs.current[id];
    if (video) {
      // Pause any previously playing reel
      if (playingId && playingId !== id && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play().then(() => {
        setPlayingId(id);
      }).catch(() => {
        setPlayingId(null);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleReplay = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play();
      setPlayingId(id);
    }
  };

  return (
    <section id="reels" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.reels.sectionTag}</span>
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
          {reelItems.map((reel) => {
            const title = lang === 'mr' ? reel.titleMr : reel.titleEn;
            const subtitle = lang === 'mr' ? reel.subtitleMr : reel.subtitleEn;
            const tag = lang === 'mr' ? reel.tagMr : reel.tagEn;
            const hasVideoFile = Boolean(reel.src && reel.src.trim() !== '');

            const isLoaded = Boolean(loadedReels[reel.id]);
            const isPlaying = playingId === reel.id;
            const isBuffering = bufferingId === reel.id;

            return (
              <div
                key={reel.id}
                className="royal-frame reel-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid var(--color-gold)',
                  position: 'relative',
                }}
              >
                {/* Corner Ornaments */}
                <div style={{ position: 'absolute', top: '6px', left: '6px', zIndex: 1 }}>
                  <RoyalCornerOrnament position="top-left" size={18} />
                </div>
                <div style={{ position: 'absolute', top: '6px', right: '6px', zIndex: 1 }}>
                  <RoyalCornerOrnament position="top-right" size={18} />
                </div>

                {/* 9:16 Card Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '177.77%', // 9:16 vertical ratio
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: '#1E1214',
                    border: '1px solid var(--color-gold)',
                  }}
                >
                  {/* ON-DEMAND VIDEO LOADING:
                      Only mount <video> after the user clicks Play.
                      Otherwise, only display lightweight thumbnail image! */}
                  {isLoaded && hasVideoFile ? (
                    <video
                      ref={(el) => (videoRefs.current[reel.id] = el)}
                      src={getAssetUrl(reel.src)}
                      poster={getAssetUrl(reel.poster)}
                      playsInline
                      muted={isMuted}
                      onLoadedData={() => handleVideoLoadedData(reel.id)}
                      onWaiting={() => setBufferingId(reel.id)}
                      onPlaying={() => setBufferingId(null)}
                      onEnded={() => setPlayingId(null)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    /* Display Thumbnail Image Only (Zero Video Bytes on Initial Load) */
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
                      }}
                      loading="lazy"
                    />
                  )}

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

                  {/* Duration Pill (if configured) */}
                  {reel.duration && !isPlaying && (
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

                  {/* Video In-Playback Controls (Mute / Replay) */}
                  {isLoaded && isPlaying && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        zIndex: 4,
                      }}
                    >
                      <button
                        type="button"
                        onClick={(e) => toggleMute(e, reel.id)}
                        aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'rgba(20, 10, 12, 0.75)',
                          border: '1px solid var(--color-gold)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleReplay(e, reel.id)}
                        aria-label="Replay reel"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'rgba(20, 10, 12, 0.75)',
                          border: '1px solid var(--color-gold)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <RotateCcw size={14} />
                      </button>
                    </div>
                  )}

                  {/* Play / Pause Overlay Trigger */}
                  <div
                    onClick={() => handlePlayClick(reel.id, hasVideoFile)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.3)',
                      cursor: hasVideoFile ? 'pointer' : 'default',
                      zIndex: 2,
                      transition: 'background 0.3s ease',
                    }}
                  >
                    {hasVideoFile && (
                      <button
                        type="button"
                        aria-label={isPlaying ? t.reels.pauseReel : t.reels.playReel}
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: 'rgba(112, 31, 43, 0.92)',
                          border: '2px solid var(--color-gold)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: 'var(--shadow-gold)',
                          transition: 'all 0.25s ease',
                          opacity: isPlaying ? 0 : 1,
                          transform: isPlaying ? 'scale(0.85)' : 'scale(1)',
                          pointerEvents: isPlaying ? 'none' : 'auto',
                        }}
                        className="play-pulse-btn"
                      >
                        {isBuffering ? (
                          <Loader2 size={24} className="animate-spin" />
                        ) : isPlaying ? (
                          <Pause size={24} />
                        ) : (
                          <Play size={24} style={{ marginLeft: '3px' }} />
                        )}
                      </button>
                    )}
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

                  {!hasVideoFile && (
                    <div
                      className="placeholder-notice"
                      style={{
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.8rem',
                        marginTop: '0.4rem',
                      }}
                    >
                      <Info size={14} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{t.reels.notAvailableNote}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .reel-card:hover .play-pulse-btn {
          transform: scale(1.08) !important;
          background: var(--color-maroon) !important;
          border-color: #DFC498 !important;
        }
        .reel-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
    </section>
  );
};
