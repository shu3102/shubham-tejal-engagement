export type Language = 'en' | 'mr';

export interface CoupleProfile {
  name: string;
  marathiName: string;
  role: string;
  marathiRole: string;
  tagline: string;
  marathiTagline: string;
  image: string;
  description: string;
  marathiDescription: string;
}

export interface StoryMilestone {
  id: string;
  year?: string;
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  image?: string;
  category: 'college' | 'love' | 'moments' | 'milestones' | 'families' | 'sakharpuda';
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleMr: string;
  category: 'couple' | 'portrait' | 'pre-engagement';
  categoryLabelEn: string;
  categoryLabelMr: string;
  src: string;
  altEn: string;
  altMr: string;
  captionEn?: string;
  captionMr?: string;
}

export interface ReelItem {
  id: string;
  titleEn: string;
  titleMr: string;
  subtitleEn: string;
  subtitleMr: string;
  src?: string;
  poster: string;
  duration?: string;
  tagEn: string;
  tagMr: string;
}

export interface EventConfig {
  groom: {
    fullNameEn: string;
    fullNameMr: string;
    shortNameEn: string;
    shortNameMr: string;
    image: string;
    aboutPlaceholderEn: string;
    aboutPlaceholderMr: string;
  };
  bride: {
    fullNameEn: string;
    fullNameMr: string;
    shortNameEn: string;
    shortNameMr: string;
    image: string;
    aboutPlaceholderEn: string;
    aboutPlaceholderMr: string;
  };
  displayCoupleNames: {
    en: string;
    mr: string;
  };
  date: {
    fullDateEn: string;
    fullDateMr: string;
    dayOfWeekEn: string;
    dayOfWeekMr: string;
    timeEn: string;
    timeMr: string;
    // ISO string formatted for IST (+05:30)
    targetIsoTimestamp: string;
    // Duration in hours for .ics calendar
    calendarDurationHours: number;
  };
  venue: {
    nameEn: string;
    nameMr: string;
    addressLineEn: string;
    addressLineMr: string;
    city: string;
    pincode: string;
    state: string;
    // Keep map URL configurable until confirmed. Empty string shows clear placeholder state.
    googleMapsUrl: string;
    embedMapUrl?: string;
  };
  rsvp: {
    // Configurable WhatsApp phone number with country code, e.g. "+91XXXXXXXXXX". Empty string triggers placeholder mode.
    whatsappNumber: string;
    contactPersonEn?: string;
    contactPersonMr?: string;
  };
  media: {
    // Background audio file path (empty string disables/hides gracefully)
    backgroundAudioSrc: string;
    audioTitleEn: string;
    audioTitleMr: string;
  };
  site: {
    // Production public site URL used for sharing and QR codes. Empty string uses current window.location.origin
    productionUrl: string;
  };
}

export interface Translations {
  nav: {
    invitation: string;
    couple: string;
    story: string;
    gallery: string;
    reels: string;
    blessings: string;
    details: string;
    rsvp: string;
  };
  invocation: {
    mantra: string;
    subtitle: string;
  };
  hero: {
    tagline: string;
    subTagline: string;
    ceremonyTitle: string;
    exploreBtn: string;
    saveDateBtn: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    eventLive: string;
    eventEnded: string;
  };
  couple: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    groomRole: string;
    brideRole: string;
    placeholderNote: string;
  };
  story: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    placeholderNotice: string;
  };
  gallery: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    allFilter: string;
    coupleFilter: string;
    portraitFilter: string;
    preEngagementFilter: string;
    emptyNote: string;
    closeLightbox: string;
    prevPhoto: string;
    nextPhoto: string;
  };
  reels: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    playReel: string;
    pauseReel: string;
    notAvailableNote: string;
  };
  blessings: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    blessingQuote: string;
    fromFamilies: string;
    placeholderNotice: string;
  };
  details: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    dateLabel: string;
    timeLabel: string;
    venueLabel: string;
    addressLabel: string;
    getDirectionsBtn: string;
    addToCalendarBtn: string;
    mapPlaceholderNotice: string;
  };
  rsvp: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    warmMessage: string;
    whatsappBtn: string;
    callBtn: string;
    placeholderNotice: string;
    prefilledMessage: string;
  };
  share: {
    shareBtn: string;
    modalTitle: string;
    modalSubtitle: string;
    copyLink: string;
    linkCopied: string;
    whatsappShare: string;
    qrLabel: string;
    qrScanHint: string;
    close: string;
  };
  audio: {
    play: string;
    pause: string;
    nowPlaying: string;
    noAudioAvailable: string;
  };
  footer: {
    closingTitle: string;
    closingSubtitle: string;
    blessingsText: string;
    madeWithLove: string;
    backToTop: string;
  };
}
