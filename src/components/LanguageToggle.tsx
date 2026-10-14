import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageToggleProps {
  className?: string;
  variant?: 'pill' | 'minimal';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = '',
  variant = 'pill',
}) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection / भाषा निवडा"
      className={`language-toggle ${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(247, 242, 232, 0.95)',
        border: '1px solid var(--color-gold)',
        borderRadius: 'var(--radius-full)',
        padding: '3px',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        style={{
          padding: '4px 12px',
          fontSize: '0.85rem',
          fontWeight: 600,
          fontFamily: 'var(--font-body-en)',
          borderRadius: 'var(--radius-full)',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backgroundColor: lang === 'en' ? 'var(--color-maroon)' : 'transparent',
          color: lang === 'en' ? '#FFFFFF' : 'var(--color-charcoal)',
        }}
      >
        EN
      </button>
      <span style={{ color: 'var(--color-gold)', margin: '0 2px', fontSize: '0.8rem' }}>|</span>
      <button
        type="button"
        onClick={() => setLang('mr')}
        aria-pressed={lang === 'mr'}
        style={{
          padding: '4px 12px',
          fontSize: '0.85rem',
          fontWeight: 600,
          fontFamily: 'var(--font-body-mr)',
          borderRadius: 'var(--radius-full)',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          backgroundColor: lang === 'mr' ? 'var(--color-maroon)' : 'transparent',
          color: lang === 'mr' ? '#FFFFFF' : 'var(--color-charcoal)',
        }}
      >
        मराठी
      </button>
    </div>
  );
};
