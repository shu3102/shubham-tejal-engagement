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
    introEn: 'Senior Software Engineer, IBM • B.Tech (COEP) • Latur',
    introMr: 'Senior Software Engineer, IBM • B.Tech (COEP) • मूळ लातूर',
    bioEn:
      'Shubham is a calm, caring, kind-hearted soul with an ambitious spirit and a playful side. Originally from Latur, he holds a B.Tech from COEP and works as a Senior Software Engineer at IBM. Whether it’s travelling, music, bikes, or cricket, he finds joy in the things he loves. At the heart of everything he does is one simple value: family and their happiness.',
    bioMr:
      'शांत, प्रेमळ आणि मनमिळाऊ स्वभावाचा, महत्त्वाकांक्षी आणि खोडकर बाजू असलेला शुभम लातूरचा आहे. COEP मधून B.Tech पूर्ण करून तो सध्या IBM मध्ये Senior Software Engineer म्हणून कार्यरत आहे. प्रवास, संगीत, बाईक आणि क्रिकेट या त्याच्या आवडीच्या गोष्टी आहेत. त्याच्यासाठी सर्वांत महत्त्वाचं आहे ते म्हणजे कुटुंब आणि आपल्या माणसांचा आनंद.',
  },

  bride: {
    fullNameEn: 'Tejal Khairnar',
    fullNameMr: 'तेजल खैरनार',
    shortNameEn: 'Tejal',
    shortNameMr: 'तेजल',
    image: './assets/images/placeholders/tejal-portrait.jpg',
    introEn: 'Project Manager, ICICI • B.Tech (COEP) • Born in Abu Dhabi',
    introMr: 'Project Manager, ICICI • B.Tech (COEP) • जन्म अबू धाबी',
    bioEn:
      'Tejal is a little princess with a cute charm, a fiery temper, and a wonderfully expressive personality. Born in Abu Dhabi, she holds a B.Tech from COEP and works as a Project Manager at ICICI. She loves shopping, food, and makeup—and has a special talent for teasing Shubhu! Beneath her spirited personality is a heart that treasures family and the happiness of her loved ones.',
    bioMr:
      'गोड, लाडकी आणि थोडीशी रागीट, चिडचिडी पण मनाने खास अशी तेजल म्हणजे सगळ्यांची लाडकी प्रिन्सेस! अबू धाबी येथे जन्मलेली तेजल COEP मधून B.Tech पूर्ण करून सध्या ICICI मध्ये Project Manager म्हणून कार्यरत आहे. शॉपिंग, खाणं आणि मेकअप या तिच्या आवडीच्या गोष्टी; आणि शुभूला चिडवणं हा तिचा खास छंद! तिच्यासाठीही कुटुंब आणि आपल्या माणसांचा आनंद सर्वांत महत्त्वाचा आहे.',
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
    googleMapsUrl: 'https://maps.app.goo.gl/ucuLXympjUwdLWkX8',
    embedMapUrl: '',
  },

  rsvp: {
    /**
     * WhatsApp RSVP Phone Number:
     * Format when provided: '+919XXXXXXXXX'
     */
    whatsappNumber: '+917741085675',
    contactPersonEn: 'Somwanshi & Khairnar Family',
    contactPersonMr: 'सोमवंशी व खैरनार परिवार',
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
