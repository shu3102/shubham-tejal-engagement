import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { reelItems } from '../content/reels';
import { getAssetUrl } from '../utils/assetUrl';
import { LotusMotif } from '../components/Motifs';
import { Play, Pause, Info } from 'lucide-react';

export const ReelsSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const toggleVideo = (id: string, hasSrc: boolean) => {
    if (!hasSrc) return;

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
            const isPlaying = playingId === reel.id;

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
                {/* 9:16 Card Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '177.77%', // 9:16 aspect ratio
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: '#1E1214',
                    border: '1px solid var(--color-gold)',
                  }}
                >
                  {hasVideoFile ? (
                    <video
                      ref={(el) => (videoRefs.current[reel.id] = el)}
                      src={getAssetUrl(reel.src)}
                      poster={getAssetUrl(reel.poster)}
                      playsInline
                      preload="none"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onEnded={() => setPlayingId(null)}
                    />
                  ) : (
                    <img
                      src={getAssetUrl(reel.poster)}
                      alt={`${title} placeholder poster`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      loading="lazy"
                    />
                  )}

                  {/* Top Tag Badge */}
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

                  {/* Play / Pause Overlay Trigger */}
                  <div
                    onClick={() => toggleVideo(reel.id, hasVideoFile)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.25)',
                      cursor: hasVideoFile ? 'pointer' : 'default',
                      zIndex: 2,
                    }}
                  >
                    {hasVideoFile && (
                      <button
                        type="button"
                        aria-label={isPlaying ? t.reels.pauseReel : t.reels.playReel}
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          background: 'rgba(112, 31, 43, 0.9)',
                          border: '2px solid var(--color-gold)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: 'var(--shadow-gold)',
                          transition: 'transform 0.2s',
                        }}
                      >
                        {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
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
                      marginBottom: '0.75rem',
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
    </section>
  );
};
