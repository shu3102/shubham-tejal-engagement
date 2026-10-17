import { EventConfig } from './types';

/**
 * ============================================================================
 * CENTRAL EVENT CONFIGURATION
 * ============================================================================
 * All core event parameters, couple details, venue information, and contact
 * placeholders are defined here. Update values here without editing React code.
 */
export const eventConfig: EventConfig = {
  groom: {
    fullNameEn: 'Shubham Somwanshi',
    fullNameMr: 'शुभम सोमवंशी',
    shortNameEn: 'Shubham',
    shortNameMr: 'शुभम',
    image: './assets/images/placeholders/shubham-portrait.png',
    aboutPlaceholderEn:
      '[Add Groom’s introduction here — Shubham Somwanshi. This field will be updated once personal bio is provided.]',
    aboutPlaceholderMr:
      '[वराचा परिचय येथे जोडा — शुभम सोमवंशी. वैयक्तिक माहिती उपलब्ध झाल्यावर हे अपडेट केले जाईल.]',
  },

  bride: {
    fullNameEn: 'Tejal Khairnar',
    fullNameMr: 'तेजल खैरnar',
    shortNameEn: 'Tejal',
    shortNameMr: 'तेजल',
    image: './assets/images/placeholders/tejal-portrait.png',
    aboutPlaceholderEn:
      '[Add Bride’s introduction here — Tejal Khairnar. This field will be updated once personal bio is provided.]',
    aboutPlaceholderMr:
      '[वधूचा परिचय येथे जोडा — तेजल खैरnar. वैयक्तिक माहिती उपलब्ध झाल्यावर हे अपडेट केले जाईल.]',
  },

  displayCoupleNames: {
    en: 'Shubham & Tejal',
    mr: 'शुभम आणि तेजल',
  },

  date: {
    fullDateEn: 'Saturday, 12 December 2026',
    fullDateMr: 'शनिवार, १२ डिसेंबर २०२६',
    dayOfWeekEn: 'Saturday',
    dayOfWeekMr: 'शनिवार',
    timeEn: '11:00 AM onwards (IST)',
    timeMr: 'सकाळी ११:०० वाजेपासून (भारतीय प्रमाणवेळ)',
    // 11:00 AM Indian Standard Time (UTC+05:30)
    targetIsoTimestamp: '2026-12-12T11:00:00+05:30',
    calendarDurationHours: 4, // Default 4 hours ceremony celebration
  },

  venue: {
    nameEn: 'Yashwant Lawns, Nashik',
    nameMr: 'यशवंत लॉन्स, नाशिक',
    addressLineEn:
      'Yashwant Lawns, Near Nandur Naka, Nashik Aurngabad Road, Wadivarhe, Swami Samartha Nagar, Nashik-422003, Maharashtra',
    addressLineMr:
      'यशवंत लॉन्स, नांदूर नाक्याजवळ, नाशिक-औरंगाबाद रोड, वाडीवऱ्हे, स्वामी समर्थ नगर, नाशिक-४२२००३, महाराष्ट्र',
    city: 'Nashik',
    pincode: '422003',
    state: 'Maharashtra',
    /**
     * Map directions URL:
     * Keep as empty string or placeholder until confirmed by Shubham & Tejal.
     * When left empty or set to '#', the UI renders a graceful "Awaiting Google Maps link" state.
     * Example once confirmed: 'https://maps.google.com/?q=Yashwant+Lawns+Nashik'
     */
    googleMapsUrl: '',
    embedMapUrl: '',
  },

  rsvp: {
    /**
     * WhatsApp RSVP Phone Number:
     * Leave empty string until provided by the couple.
     * When empty, a clear labeled placeholder message is displayed to avoid exposing fake/real phone numbers.
     * Format when provided: '+919XXXXXXXXX'
     */
    whatsappNumber: '',
    contactPersonEn: 'Somwanshi & Khairnar Family',
    contactPersonMr: 'सोमवंशी व खैरnar परिवार',
  },

  media: {
    /**
     * Background instrumental audio file (e.g. classical shehnai, sitar, or flute).
     * Leave empty string if no audio is configured yet.
     * When empty, the audio player stays quietly hidden or disabled.
     */
    backgroundAudioSrc: './assets/audio/placeholders/shehnai-ambient.mp3',
    audioTitleEn: 'Traditional Mangalashtak & Shehnai Raga',
    audioTitleMr: 'पारंपरिक मंगलाष्टक आणि सनई धून',
  },

  site: {
    /**
     * Production website URL for QR Code and Web Share.
     * Can be set to GitHub Pages URL, e.g. 'https://shubham-somwanshi.github.io/shubham-tejal-engagement'
     * If left empty, defaults dynamically to window.location.href.
     */
    productionUrl: '',
  },
};
