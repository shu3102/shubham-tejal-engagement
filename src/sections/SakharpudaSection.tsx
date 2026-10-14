import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MangalKalashMotif, RoyalCornerOrnament } from '../components/Motifs';
import { Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export const SakharpudaSection: React.FC = () => {
  const { t } = useLanguage();

  const ceremonyCards = [
    {
      icon: <Sparkles size={24} style={{ color: 'var(--color-gold)' }} />,
      title: t.ceremony.meaningTitle,
      body: t.ceremony.meaningBody,
    },
    {
      icon: <HeartHandshake size={24} style={{ color: 'var(--color-maroon)' }} />,
      title: t.ceremony.ritualsTitle,
      body: t.ceremony.ritualsBody,
    },
    {
      icon: <ShieldCheck size={24} style={{ color: 'var(--color-gold-dark)' }} />,
      title: t.ceremony.significanceTitle,
      body: t.ceremony.significanceBody,
    },
  ];

  return (
    <section id="ceremony" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{t.ceremony.sectionTag}</span>
          <h2 className="section-title">{t.ceremony.sectionTitle}</h2>
          <div className="divider-motif">
            <div className="divider-line" />
            <MangalKalashMotif size={32} />
            <div className="divider-line" />
          </div>
          <p className="section-subtitle">{t.ceremony.sectionSubtitle}</p>
        </div>

        {/* 3 Pillar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {ceremonyCards.map((card, idx) => (
            <div
              key={idx}
              className="royal-frame"
              style={{
                padding: '2.25rem 1.75rem',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
                <RoyalCornerOrnament position="top-left" size={22} />
              </div>
              <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
                <RoyalCornerOrnament position="top-right" size={22} />
              </div>

              {/* Icon Circle */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(247, 242, 232, 0.9)',
                  border: '1px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {card.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.35rem',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-maroon-deep)',
                  marginBottom: '0.85rem',
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-charcoal-muted)',
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
