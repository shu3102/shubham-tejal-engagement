import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { galleryItems } from '../content/gallery';
import { getAssetUrl } from '../utils/assetUrl';
import { Lightbox } from '../components/Lightbox';
import { LotusMotif, RoyalCornerOrnament } from '../components/Motifs';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = galleryItems.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic continuous slider rotating every 1 second (1000ms)
  useEffect(() => {
    if (!isAutoPlaying || activeLightboxIndex !== null || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, activeLightboxIndex, isHovered, nextSlide]);


  const currentItem = galleryItems[activeIndex];
  const activeTitle = lang === 'mr' ? currentItem.titleMr : currentItem.titleEn;
  const activeCategory = lang === 'mr' ? currentItem.categoryLabelMr : currentItem.categoryLabelEn;
  const activeCaption = lang === 'mr' ? currentItem.captionMr : currentItem.captionEn;

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="section section-alt" style={{ overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
            <span>{t.gallery.sectionTag}</span>
          </span>
          <h2 className="section-title">{t.gallery.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={28} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">
            {lang === 'mr'
              ? '६ छायाचित्रांचा फिरणारा 3D स्टॅक • दर सेकंदाला आपोआप बदलणारा • मोठा करून पाहण्यासाठी टॅप करा'
              : 'Continuous 6-card rotating 3D stack • Auto-advances every 1 second • Tap any photo to enlarge'}
          </p>
        </div>

        {/* 3D Stack Stage Container */}
        <div
          className="stack-stage-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            maxWidth: '520px',
            margin: '0 auto',
            paddingTop: '65px',
            paddingBottom: '25px',
            perspective: '1200px',
          }}
        >
          {/* Card Stack */}
          <div
            className="card-stack-container"
            style={{
              position: 'relative',
              width: '100%',
              height: '480px',
            }}
          >
            {galleryItems.map((item, index) => {
              const offset = (index - activeIndex + total) % total;
              const isFront = offset === 0;

              // 3D positioning logic for 6 stacked cards
              let transform = '';
              let zIndex = 1;
              let opacity = 0;
              let filter = 'brightness(1)';
              let pointerEvents: 'auto' | 'none' = 'none';

              switch (offset) {
                case 0:
                  // Front Active Card
                  transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
                  zIndex = 10;
                  opacity = 1;
                  pointerEvents = 'auto';
                  break;
                case 1:
                  // Card 2
                  transform = 'translate3d(26px, -16px, -40px) scale(0.94) rotate(4deg)';
                  zIndex = 9;
                  opacity = 0.9;
                  filter = 'brightness(0.92)';
                  pointerEvents = 'auto';
                  break;
                case 2:
                  // Card 3
                  transform = 'translate3d(-26px, -30px, -80px) scale(0.88) rotate(-4deg)';
                  zIndex = 8;
                  opacity = 0.8;
                  filter = 'brightness(0.85)';
                  pointerEvents = 'auto';
                  break;
                case 3:
                  // Card 4
                  transform = 'translate3d(36px, -44px, -120px) scale(0.82) rotate(6deg)';
                  zIndex = 7;
                  opacity = 0.65;
                  filter = 'brightness(0.78)';
                  break;
                case 4:
                  // Card 5
                  transform = 'translate3d(-36px, -56px, -160px) scale(0.76) rotate(-6deg)';
                  zIndex = 6;
                  opacity = 0.45;
                  filter = 'brightness(0.72)';
                  break;
                case 5:
                  // Card 6 (Bottom / Returning)
                  transform = 'translate3d(0, -66px, -200px) scale(0.70) rotate(0deg)';
                  zIndex = 5;
                  opacity = 0.3;
                  filter = 'brightness(0.65)';
                  break;
                default:
                  transform = 'translate3d(0, -80px, -240px) scale(0.65)';
                  zIndex = 1;
                  opacity = 0;
              }

              const itemTitle = lang === 'mr' ? item.titleMr : item.titleEn;
              const itemAlt = lang === 'mr' ? item.altMr : item.altEn;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isFront) {
                      setActiveLightboxIndex(index);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  role="button"
                  tabIndex={isFront ? 0 : -1}
                  aria-label={`${itemTitle} (${index + 1} of ${total})`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    marginLeft: '-185px',
                    width: '370px',
                    height: '460px',
                    transform,
                    zIndex,
                    opacity,
                    filter,
                    pointerEvents,
                    transition:
                      'transform 0.5s cubic-bezier(0.34, 1.25, 0.64, 1), opacity 0.4s ease, filter 0.4s ease, box-shadow 0.4s ease',
                    cursor: isFront ? 'pointer' : 'pointer',
                    willChange: 'transform, opacity',
                  }}
                  className={`stack-card ${isFront ? 'is-front' : 'is-stacked'}`}
                >
                  <div
                    className="royal-frame"
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#FFFFFF',
                      border: isFront
                        ? '2px solid var(--color-gold)'
                        : '1px solid var(--color-gold-border)',
                      boxShadow: isFront
                        ? '0 20px 40px rgba(112, 31, 43, 0.22), 0 0 0 1px var(--color-gold)'
                        : '0 10px 25px rgba(63, 53, 47, 0.12)',
                      borderRadius: 'var(--radius-md)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Corner Ornaments on Front Card */}
                    {isFront && (
                      <>
                        <div style={{ position: 'absolute', top: '6px', left: '6px', zIndex: 3 }}>
                          <RoyalCornerOrnament position="top-left" size={20} />
                        </div>
                        <div style={{ position: 'absolute', top: '6px', right: '6px', zIndex: 3 }}>
                          <RoyalCornerOrnament position="top-right" size={20} />
                        </div>
                      </>
                    )}

                    {/* Image Area */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '350px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        backgroundColor: '#1E1214',
                        border: '1px solid var(--color-gold-border)',
                      }}
                    >
                      <img
                        src={getAssetUrl(item.src)}
                        alt={itemAlt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                        loading="lazy"
                      />

                      {/* Stack index badge on image */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(20, 10, 12, 0.78)',
                          backdropFilter: 'blur(4px)',
                          border: '1px solid var(--color-gold)',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          zIndex: 2,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')} / 06
                      </div>

                      {/* Click to Enlarge Overlay on Front Card */}
                      {isFront && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(112, 31, 43, 0.9)',
                            border: '1px solid var(--color-gold)',
                            color: '#FFFFFF',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            boxShadow: 'var(--shadow-sm)',
                            zIndex: 2,
                          }}
                        >
                          <Maximize2 size={13} />
                          <span>{lang === 'mr' ? 'मोठे करा' : 'Enlarge'}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Title & Category */}
                    <div
                      style={{
                        paddingTop: '0.75rem',
                        textAlign: 'center',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.74rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-gold-dark)',
                          fontWeight: 600,
                          marginBottom: '2px',
                        }}
                      >
                        {lang === 'mr' ? item.categoryLabelMr : item.categoryLabelEn}
                      </span>
                      <h3
                        style={{
                          fontSize: '1.2rem',
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--color-maroon-deep)',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {itemTitle}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Card Info Details */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '1.25rem',
              minHeight: '48px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-gold-dark)',
                fontWeight: 600,
                marginBottom: '4px',
              }}
            >
              {activeCategory}
            </span>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                color: 'var(--color-maroon)',
                fontWeight: 600,
              }}
            >
              {activeTitle}
            </div>

            {activeCaption && (
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--color-charcoal-muted)',
                  fontStyle: 'italic',
                  marginTop: '2px',
                }}
              >
                {activeCaption}
              </p>
            )}
          </div>

          {/* Slider Controls Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1.25rem',
            }}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label={t.gallery.prevPhoto}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1.5px solid var(--color-gold)',
                color: 'var(--color-maroon)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Auto-Slide Indicator & Toggle */}
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? 'Pause automatic slider' : 'Resume automatic slider'}
              title={isAutoPlaying ? 'Pause 1s Auto-Slide' : 'Start 1s Auto-Slide'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                background: isAutoPlaying ? 'var(--color-maroon)' : '#FFFFFF',
                border: '1.5px solid var(--color-gold)',
                color: isAutoPlaying ? '#FFFFFF' : 'var(--color-maroon)',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: isAutoPlaying ? 'var(--shadow-maroon)' : 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
            >
              {isAutoPlaying ? (
                <>
                  <Pause size={14} />
                  <span>1s {lang === 'mr' ? 'फिरणे सुरू' : 'Auto-Rotating'}</span>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#25D366',
                      display: 'inline-block',
                      boxShadow: '0 0 6px #25D366',
                    }}
                  />
                </>
              ) : (
                <>
                  <Play size={14} />
                  <span>{lang === 'mr' ? 'सुरू करा (१ से)' : 'Start 1s Auto'}</span>
                </>
              )}
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label={t.gallery.nextPhoto}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1.5px solid var(--color-gold)',
                color: 'var(--color-maroon)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* 6 Thumbnail Stack Indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '1.5rem',
            }}
          >
            {galleryItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Jump to stack card ${idx + 1}`}
                  style={{
                    width: isActive ? '32px' : '10px',
                    height: '10px',
                    borderRadius: 'var(--radius-full)',
                    background: isActive ? 'var(--color-maroon)' : 'rgba(176, 141, 87, 0.35)',
                    border: '1px solid var(--color-gold)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for high-res photo inspection */}
      <Lightbox
        items={galleryItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />

      <style>{`
        @media (max-width: 480px) {
          .stack-stage-wrapper {
            padding-top: 50px !important;
          }
          .card-stack-container {
            height: 410px !important;
          }
          .stack-card {
            width: 290px !important;
            height: 390px !important;
            margin-left: -145px !important;
          }
          .stack-card .royal-frame > div:first-of-type {
            height: 290px !important;
          }
        }
        .stack-card.is-front:hover {
          transform: translate3d(0, -6px, 0) scale(1.02) !important;
          box-shadow: 0 24px 50px rgba(112, 31, 43, 0.3), 0 0 0 2px var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
};
