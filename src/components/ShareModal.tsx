import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, Share2, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { eventConfig } from '../content/event';
import { copyToClipboard, getWhatsAppShareUrl } from '../utils/share';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getShareUrl = (): string => {
    if (eventConfig.site.productionUrl && eventConfig.site.productionUrl.trim() !== '') {
      return eventConfig.site.productionUrl;
    }
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return 'https://shubham-somwanshi.github.io/shubham-tejal-engagement/';
  };

  const shareUrl = getShareUrl();

  const shareTitle =
    lang === 'mr'
      ? 'शुभम आणि तेजल — साखरपुडा आमंत्रण'
      : 'Shubham & Tejal — Sakharpuda Invitation';

  const shareMessage =
    lang === 'mr'
      ? `॥ श्री गणेशाय नमः ॥\n*${shareTitle}*\n\nसस्नेह निमंत्रण! शुभम सोमवंशी आणि तेजल खैरनार यांच्या पारंपरिक साखरपुडा सोहळ्यास आपण सपरिवार उपस्थित राहून शुभाशीर्वाद द्यावेत ही नम्र विनंती.\n\nदिनांक: शनिवार, १२ डिसेंबर २०२६\nस्थळ: यशवंत लॉन्स, नाशिक\n\nआमंत्रण पत्रिका पाहण्यासाठी खालील लिंकवर क्लिक करा:`
      : `॥ Shri Ganeshaya Namah ॥\n*${shareTitle}*\n\nYou are cordially invited to celebrate the traditional Maharashtrian Sakharpuda of Shubham Somwanshi & Tejal Khairnar.\n\nDate: Saturday, 12 December 2026\nVenue: Yashwant Lawns, Nashik\n\nView the invitation:`;


  useEffect(() => {
    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        shareUrl,
        {
          width: 220,
          margin: 2,
          color: {
            dark: '#701F2B', // Deep Maroon
            light: '#FFFFFF', // Pure White
          },
        },
        (error) => {
          if (error) console.error('Error generating QR Code', error);
        }
      );
    }
  }, [isOpen, shareUrl]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    const success = await copyToClipboard(shareUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppShare = () => {
    const waUrl = getWhatsAppShareUrl(shareMessage, shareUrl);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(20, 10, 12, 0.75)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="royal-frame"
        style={{
          width: '100%',
          maxWidth: '480px',
          background: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          border: '2px solid var(--color-gold)',
          padding: '2rem',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          textAlign: 'center',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.share.close}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-charcoal-muted)',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '50%',
          }}
        >
          <X size={22} />
        </button>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(112, 31, 43, 0.1)',
            color: 'var(--color-maroon)',
            marginBottom: '0.75rem',
          }}
        >
          <Share2 size={22} />
        </div>

        <h3
          id="share-modal-title"
          style={{
            fontSize: '1.6rem',
            color: 'var(--color-maroon-deep)',
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.4rem',
          }}
        >
          {t.share.modalTitle}
        </h3>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--color-charcoal-muted)',
            marginBottom: '1.5rem',
          }}
        >
          {t.share.modalSubtitle}
        </p>

        {/* QR Code Canvas */}
        <div
          style={{
            display: 'inline-block',
            padding: '12px',
            background: '#FFFFFF',
            border: '1px solid var(--color-gold-border)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '1rem',
          }}
        >
          <canvas ref={canvasRef} style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-charcoal-muted)',
              marginTop: '6px',
            }}
          >
            {t.share.qrScanHint}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-outline"
            style={{
              width: '100%',
              borderColor: copied ? '#2E7D32' : 'var(--color-gold)',
              color: copied ? '#2E7D32' : 'var(--color-maroon)',
              fontWeight: 600,
            }}
          >
            {copied ? (
              <>
                <Check size={18} />
                <span>{t.share.linkCopied}</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>{t.share.copyLink}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="btn"
            style={{
              width: '100%',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
              fontWeight: 600,
            }}
          >
            <MessageCircle size={18} />
            <span>{t.share.whatsappShare}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
