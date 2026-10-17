import React, { useState, useEffect } from 'react';
import { Menu, X, Share2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { LanguageToggle } from './LanguageToggle';
import { AudioPlayer } from './AudioPlayer';

interface HeaderProps {
  onOpenShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenShare }) => {
  const { lang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.invitation },
    { href: '#couple', label: t.nav.couple },
    // { href: '#story', label: t.nav.story },
    { href: '#gallery', label: t.nav.gallery },

    { href: '#reels', label: t.nav.reels },
    { href: '#details', label: t.nav.details },
    { href: '#rsvp', label: t.nav.rsvp },

  ];

  const coupleShortNames =
    lang === 'mr' ? eventConfig.displayCoupleNames.mr : eventConfig.displayCoupleNames.en;

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled
          ? 'rgba(247, 242, 232, 0.96)'
          : 'rgba(247, 242, 232, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-gold-border)',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top Paithani Decorative Strip */}
      <div className="paithani-strip" />

      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--header-height)',
          }}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--color-maroon)',
                letterSpacing: '0.05em',
              }}
            >
              {coupleShortNames}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-gold-dark)',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderLeft: '1px solid var(--color-gold)',
                paddingLeft: '8px',
              }}
            >
              12.12.26
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.25rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'var(--color-charcoal)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-maroon)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-charcoal)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls: Audio, Language Toggle, Share, Mobile Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="header-audio-desktop">
              <AudioPlayer />
            </div>

            <LanguageToggle />

            <button
              type="button"
              onClick={onOpenShare}
              aria-label={t.share.shareBtn}
              title={t.share.shareBtn}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(112, 31, 43, 0.08)',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-maroon)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Share2 size={17} />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="mobile-menu-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                background: 'transparent',
                border: '1px solid var(--color-gold-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-maroon)',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '2px solid var(--color-gold)',
            boxShadow: 'var(--shadow-lg)',
            padding: '1.25rem 1.5rem 1.75rem 1.5rem',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div style={{ marginBottom: '1.25rem' }}>
            <AudioPlayer />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '1.05rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  color: 'var(--color-maroon-deep)',
                  textDecoration: 'none',
                  padding: '6px 0',
                  borderBottom: '1px dashed var(--color-gold-border)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .header-audio-desktop {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
