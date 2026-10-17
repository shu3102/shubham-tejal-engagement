import { GalleryItem } from './types';

/**
 * ============================================================================
 * PHOTO GALLERY CONFIGURATION
 * ============================================================================
 * Add or replace photographs by placing image files in `public/assets/images/`
 * and updating the records below.
 * Categories: 'couple' | 'portrait' | 'pre-engagement'
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-couple-1',
    category: 'couple',
    categoryLabelEn: 'Couple Portrait',
    categoryLabelMr: 'दोघांची छायाचित्रे',
    titleEn: 'A Gentle Beginning',
    titleMr: 'सुंदर सहप्रवास',
    src: './assets/images/placeholders/gallery-5.jpg',
    altEn: 'Shubham and Tejal romantic portrait placeholder',
    altMr: 'शुभम आणि तेजल यांचे सुंदर छायाचित्र',
    captionEn: '[Placeholder: Add romantic couple portrait photo here]',
    captionMr: '[दोघांचे सुंदर छायाचित्र येथे जोडा]',
  },
  {
    id: 'gallery-shubham-portrait',
    category: 'portrait',
    categoryLabelEn: 'Groom Portrait',
    categoryLabelMr: 'व्यक्तिगत छायाचित्रे',
    titleEn: 'Shubham Somwanshi',
    titleMr: 'शुभम सोमवंशी',
    src: './assets/images/placeholders/gallery-6.jpg',
    altEn: 'Portrait photograph of Shubham Somwanshi',
    altMr: 'शुभम सोमवंशी यांचे व्यक्तिगत छायाचित्र',
    captionEn: '[Placeholder: Add Shubham’s individual portrait photo here]',
    captionMr: '[शुभम यांचे व्यक्तिगत छायाचित्र येथे जोडा]',
  },
  {
    id: 'gallery-tejal-portrait',
    category: 'portrait',
    categoryLabelEn: 'Bride Portrait',
    categoryLabelMr: 'व्यक्तिगत छायाचित्रे',
    titleEn: 'Tejal Khairnar',
    titleMr: 'तेजल खैरnar',
    src: './assets/images/placeholders/gallery-3.jpg',
    altEn: 'Portrait photograph of Tejal Khairnar',
    altMr: 'तेजल खैरnar यांचे व्यक्तिगत छायाचित्र',
    captionEn: '[Placeholder: Add Tejal’s individual portrait photo here]',
    captionMr: '[तेजल यांचे व्यक्तिगत छायाचित्र येथे जोडा]',
  },
  {
    id: 'gallery-pre-engagement-1',
    category: 'pre-engagement',
    categoryLabelEn: 'Pre-Engagement Photoshoot',
    categoryLabelMr: 'प्री-एंगेजमेंट फोटोशूट',
    titleEn: 'Golden Hour Reflections',
    titleMr: 'सोनेरी संध्याकाळचे क्षण',
    src: './assets/images/placeholders/gallery-1.jpg',
    altEn: 'Pre-engagement photoshoot under warm sunset light',
    altMr: 'प्री-एंगेजमेंट फोटोशूटचे मनमोहक छायाचित्र',
    captionEn: '[Placeholder: Add outdoor pre-engagement photoshoot picture here]',
    captionMr: '[प्री-एंगेजमेंट फोटोशूट छायाचित्र येथे जोडा]',
  },
  {
    id: 'gallery-couple-2',
    category: 'couple',
    categoryLabelEn: 'Couple Portrait',
    categoryLabelMr: 'दोघांची छायाचित्रे',
    titleEn: 'Shared Laughter',
    titleMr: 'हास्याची सुंदर फुले',
    src: './assets/images/placeholders/gallery-2.jpg',
    altEn: 'Candid smiling moment between Shubham and Tejal',
    altMr: 'शुभम आणि तेजल यांचा निखळ हास्याचा क्षण',
    captionEn: '[Placeholder: Add candid couple laughing moment here]',
    captionMr: '[दोघांचा निखळ हास्याचा क्षण येथे जोडा]',
  },
  {
    id: 'gallery-pre-engagement-2',
    category: 'pre-engagement',
    categoryLabelEn: 'Pre-Engagement Photoshoot',
    categoryLabelMr: 'प्री-एंगेजमेंट फोटोशूट',
    titleEn: 'Traditional Elegance',
    titleMr: 'पारंपरिक साज आणि सौंदर्य',
    src: './assets/images/placeholders/gallery-4.jpg',
    altEn: 'Couple in traditional Maharashtrian attire',
    altMr: 'पारंपरिक महाराष्ट्रीयन वेशभूषेतील छायाचित्र',
    captionEn: '[Placeholder: Add traditional attire photoshoot here]',
    captionMr: '[पारंपरिक वेशभूषेतील छायाचित्र येथे जोडा]',
  },
];
