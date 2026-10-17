import { ReelItem } from './types';

/**
 * ============================================================================
 * VERTICAL REELS CONFIGURATION (9:16)
 * ============================================================================
 * Videos and posters located in `public/assets/videos/placeholders/`.
 */
export const reelItems: ReelItem[] = [
  {
    id: 'reel-love-story',
    titleEn: 'Our Love Story',
    titleMr: 'आमची प्रेमकथा',
    subtitleEn: 'From college halls to lifelong vows',
    subtitleMr: 'कॉलेजच्या आठवणींपासून जन्मोजन्मीच्या साथीपर्यंत',
    src: './assets/videos/placeholders/reel-poster-1.mov',
    poster: './assets/videos/placeholders/reel-poster-11.jpg',
    duration: '0:45',
    tagEn: 'Story Reel',
    tagMr: 'प्रेमकथा रील',
  },
  {
    id: 'reel-couple-montage',
    titleEn: 'Cinematic Couple Montage',
    titleMr: 'सिनेमॅटिक मोन्टाज',
    subtitleEn: 'Golden memories and shared adventures',
    subtitleMr: 'सोनेरी आठवणी आणि सुंदर प्रवासाचे क्षण',
    src: './assets/videos/placeholders/panshet.mov',
    poster: './assets/videos/placeholders/reel-poster-2.jpg',
    duration: '0:60',
    tagEn: 'Montage Reel',
    tagMr: 'सिनेमॅटिक रील',
  },
  {
    id: 'reel-announcement',
    titleEn: 'Sakharpuda Announcement',
    titleMr: 'साखरपुडा अधिकृत घोषणा',
    subtitleEn: 'A joyful invitation to celebrate with us',
    subtitleMr: '१२ डिसेंबर २०२६ रोजी नाशिक येथे सहकुटुंब उपस्थिती',
    src: './assets/videos/placeholders/tryk.mov',
    poster: './assets/videos/placeholders/reel-poster-3.jpg',
    duration: '0:30',
    tagEn: 'Announcement Reel',
    tagMr: 'घोषणा रील',
  },
];
