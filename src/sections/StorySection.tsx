import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { storyMilestones } from '../content/story';
import { getAssetUrl } from '../utils/assetUrl';
import { LotusMotif } from '../components/Motifs';
import { AlertCircle, Heart, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="story" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.story.sectionTag}</span>
          <h2 className="section-title">{t.story.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={28} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.story.sectionSubtitle}</p>

          <div
            className="placeholder-notice"
            style={{
              maxWidth: '680px',
              margin: '1.5rem auto 0 auto',
              textAlign: 'left',
            }}
          >
            <AlertCircle
              size={18}
              style={{ color: 'var(--color-maroon)', flexShrink: 0, marginTop: '2px' }}
            />
            <span>{t.story.placeholderNotice}</span>
          </div>
        </div>

        {/* Timeline Progression */}
        <div
          className="timeline-container"
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2rem 0',
          }}
        >
          {/* Central Vertical Gold Guide Line (desktop) */}
          <div
            className="timeline-center-line"
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              width: '2px',
              background: 'linear-gradient(180deg, transparent, var(--color-gold), transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {storyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const title = lang === 'mr' ? item.titleMr : item.titleEn;
              const description = lang === 'mr' ? item.descriptionMr : item.descriptionEn;

              return (
                <div
                  key={item.id}
                  className="timeline-item"
                  style={{
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    position: 'relative',
                    width: '100%',
                  }}
                >
                  {/* Content Card Side */}
                  <div
                    className="timeline-content"
                    style={{
                      width: '45%',
                    }}
                  >
                    <div
                      className="royal-frame"
                      style={{
                        padding: '1.75rem',
                        position: 'relative',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      {/* Chapter Pill Tag */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-maroon)',
                          backgroundColor: 'rgba(112, 31, 43, 0.08)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <Sparkles size={12} style={{ color: 'var(--color-gold)' }} />
                        <span>{item.year}</span>
                      </div>

                      {/* Milestone Title */}
                      <h3
                        style={{
                          fontSize: '1.45rem',
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--color-maroon-deep)',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {title}
                      </h3>

                      {/* Optional Milestone Image Thumbnail Placeholder */}
                      {item.image && (
                        <div
                          style={{
                            borderRadius: 'var(--radius-sm)',
                            overflow: 'hidden',
                            border: '1px solid var(--color-gold-border)',
                            marginBottom: '0.85rem',
                          }}
                        >
                          <img
                            src={getAssetUrl(item.image)}
                            alt={title}
                            style={{
                              width: '100%',
                              height: '140px',
                              objectFit: 'cover',
                              display: 'block',
                            }}
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Description Placeholder */}
                      <p
                        style={{
                          fontSize: '0.92rem',
                          color: 'var(--color-charcoal-muted)',
                          lineHeight: 1.65,
                          fontStyle: 'italic',
                        }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div
                    className="timeline-node"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--color-maroon)',
                      border: '2px solid var(--color-gold)',
                      boxShadow: 'var(--shadow-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      zIndex: 3,
                    }}
                  >
                    <Heart size={16} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />
                  </div>

                  {/* Empty Spacer Side */}
                  <div style={{ width: '45%' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-center-line {
            left: 20px !important;
          }
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-left: 45px !important;
          }
          .timeline-content {
            width: 100% !important;
          }
          .timeline-node {
            left: 20px !important;
            top: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
