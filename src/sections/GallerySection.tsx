import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { galleryItems } from '../content/gallery';
import { GalleryItem } from '../content/types';
import { getAssetUrl } from '../utils/assetUrl';
import { Lightbox } from '../components/Lightbox';
import { LotusMotif } from '../components/Motifs';
import { Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'couple' | 'portrait' | 'pre-engagement'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const filterTabs = [
    { id: 'all', label: t.gallery.allFilter },
    { id: 'couple', label: t.gallery.coupleFilter },
    { id: 'portrait', label: t.gallery.portraitFilter },
    { id: 'pre-engagement', label: t.gallery.preEngagementFilter },
  ] as const;

  const handleOpenLightbox = (item: GalleryItem) => {
    const originalIndex = galleryItems.findIndex((g) => g.id === item.id);
    if (originalIndex !== -1) {
      setActiveLightboxIndex(originalIndex);
    }
  };

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.gallery.sectionTag}</span>
          <h2 className="section-title">{t.gallery.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <LotusMotif size={28} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.gallery.sectionSubtitle}</p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              marginTop: '2rem',
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-gold)',
                    background: isActive ? 'var(--color-maroon)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--color-charcoal)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? 'var(--shadow-maroon)' : 'var(--shadow-sm)',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {filteredItems.map((item) => {
            const title = lang === 'mr' ? item.titleMr : item.titleEn;
            const categoryLabel = lang === 'mr' ? item.categoryLabelMr : item.categoryLabelEn;
            const altText = lang === 'mr' ? item.altMr : item.altEn;

            return (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => handleOpenLightbox(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${title} in lightbox`}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: '1.5px solid var(--color-gold)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: '340px' }}>
                  <img
                    src={getAssetUrl(item.src)}
                    alt={altText}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    loading="lazy"
                  />
                  <div
                    className="gallery-hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(79, 19, 29, 0.65)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        padding: '10px 16px',
                        borderRadius: 'var(--radius-full)',
                        background: '#FFFFFF',
                        color: 'var(--color-maroon)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      <Eye size={16} />
                      <span>{t.gallery.allFilter}</span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1rem', borderTop: '1px solid var(--color-gold-border)' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-gold-dark)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {categoryLabel}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-maroon-deep)',
                    }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={galleryItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />

      <style>{`
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .gallery-card:hover img {
          transform: scale(1.04);
        }
        .gallery-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
