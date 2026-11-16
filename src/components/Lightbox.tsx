import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../content/types';
import { useLanguage } from '../hooks/useLanguage';
import { getAssetUrl } from '../utils/assetUrl';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const { lang, t } = useLanguage();

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentIndex, handlePrev, handleNext, onClose]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];
  const title = lang === 'mr' ? currentItem.titleMr : currentItem.titleEn;
  const caption = lang === 'mr' ? currentItem.captionMr : currentItem.captionEn;
  const categoryLabel = lang === 'mr' ? currentItem.categoryLabelMr : currentItem.categoryLabelEn;
  const altText = lang === 'mr' ? currentItem.altMr : currentItem.altEn;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(20, 10, 12, 0.94)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label={t.gallery.closeLightbox}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid var(--color-gold)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'all 0.2s',
        }}
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label={t.gallery.prevPhoto}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid var(--color-gold)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'all 0.2s',
        }}
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label={t.gallery.nextPhoto}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.12)',
          border: '1px solid var(--color-gold)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'all 0.2s',
        }}
      >
        <ChevronRight size={28} />
      </button>

      {/* Main Image Container */}
      <div
        style={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            border: '2px solid var(--color-gold)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            backgroundColor: '#1E1214',
          }}
        >
          <img
            src={getAssetUrl(currentItem.src)}
            alt={altText}
            style={{
              maxWidth: '85vw',
              maxHeight: '68vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        {/* Captions and Counter */}
        <div
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            color: '#FFFFFF',
            maxWidth: '650px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '3px 12px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(176, 141, 87, 0.25)',
              border: '1px solid var(--color-gold)',
              fontSize: '0.75rem',
              color: '#D4B886',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.4rem',
            }}
          >
            {categoryLabel ? `${categoryLabel} • ` : ''}{lang === 'mr' ? `छायाचित्र ${currentIndex + 1} / ${items.length}` : `Photo ${currentIndex + 1} of ${items.length}`}
          </span>
          <h3
            style={{
              fontSize: '1.4rem',
              color: '#F7F2E8',
              fontFamily: 'var(--font-heading)',
              margin: '0.2rem 0',
            }}
          >
            {title}
          </h3>
          {caption && !caption.startsWith('[Placeholder') && (
            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(247, 242, 232, 0.75)',
                margin: 0,
              }}
            >
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
