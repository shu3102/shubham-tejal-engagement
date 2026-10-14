import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/assets/images/placeholders');
const videosDir = path.resolve('public/assets/videos/placeholders');
const audioDir = path.resolve('public/assets/audio/placeholders');

fs.mkdirSync(imagesDir, { recursive: true });
fs.mkdirSync(videosDir, { recursive: true });
fs.mkdirSync(audioDir, { recursive: true });

// Story Placeholders
const storyItems = [
  { id: 'story-1', title: 'Chapter 01: How We Met', sub: 'College Memories & First Conversations' },
  { id: 'story-2', title: 'Chapter 02: When Our Relationship Began', sub: 'Friendship Blossoming into Love' },
  { id: 'story-3', title: 'Chapter 03: Memorable Moments', sub: 'Shared Laughs & Golden Adventures' },
  { id: 'story-4', title: 'Chapter 04: Important Milestones', sub: 'Dreams, Careers & Growing Together' },
  { id: 'story-5', title: 'Chapter 05: When Families Came Together', sub: 'Somwanshi & Khairnar Family Blessings' },
  { id: 'story-6', title: 'Chapter 06: Journey to Sakharpuda', sub: '12 December 2026, Yashwant Lawns' },
];

for (const s of storyItems) {
  const svg = `<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g_${s.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7F2E8" />
      <stop offset="100%" stop-color="#EDE5D4" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#g_${s.id})" />
  <rect x="16" y="16" width="768" height="468" rx="8" stroke="#B08D57" stroke-width="1.5" fill="none" />
  <rect x="24" y="24" width="752" height="452" rx="6" stroke="#B08D57" stroke-width="0.75" stroke-dasharray="4 4" fill="none" />
  <circle cx="400" cy="200" r="48" fill="#701F2B" fill-opacity="0.1" stroke="#B08D57" stroke-width="1.5" />
  <path d="M400 176C392 192 394 208 400 218C406 208 408 192 400 176Z" fill="#B08D57" />
  <text x="400" y="280" text-anchor="middle" fill="#701F2B" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-weight="600" letter-spacing="1.5">${s.title}</text>
  <text x="400" y="315" text-anchor="middle" fill="#3F352F" font-family="'Inter', sans-serif" font-size="14">${s.sub}</text>
  <text x="400" y="350" text-anchor="middle" fill="#826437" font-family="'Inter', sans-serif" font-size="12" letter-spacing="1">STORY PHOTO PLACEHOLDER</text>
</svg>`;
  fs.writeFileSync(path.join(imagesDir, `${s.id}.svg`), svg);
}

// Gallery Placeholders
const galleryItems = [
  { id: 'gallery-1', title: 'Couple Portrait', sub: 'Shubham & Tejal Romantic Session' },
  { id: 'gallery-2', title: 'Groom Portrait', sub: 'Shubham Somwanshi' },
  { id: 'gallery-3', title: 'Bride Portrait', sub: 'Tejal Khairnar' },
  { id: 'gallery-4', title: 'Pre-Engagement Shoot', sub: 'Golden Hour In Nashik' },
  { id: 'gallery-5', title: 'Candid Joy', sub: 'Laughter & Pure Moments' },
  { id: 'gallery-6', title: 'Traditional Attire', sub: 'Maharashtrian Paithani Elegance' },
];

for (const g of galleryItems) {
  const svg = `<svg width="700" height="850" viewBox="0 0 700 850" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_${g.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F131D" />
      <stop offset="60%" stop-color="#701F2B" />
      <stop offset="100%" stop-color="#3F352F" />
    </linearGradient>
  </defs>
  <rect width="700" height="850" fill="url(#bg_${g.id})" />
  <rect x="24" y="24" width="652" height="802" rx="8" stroke="#B08D57" stroke-width="1.5" fill="none" />
  <rect x="32" y="32" width="636" height="786" rx="6" stroke="#D4B886" stroke-width="0.75" stroke-opacity="0.5" fill="none" />
  <circle cx="350" cy="380" r="64" fill="#B08D57" fill-opacity="0.2" stroke="#B08D57" stroke-width="2" />
  <!-- Lotus Icon -->
  <path d="M350 345C340 365 342 385 350 398C358 385 360 365 350 345Z" fill="#D4B886" />
  <text x="350" y="490" text-anchor="middle" fill="#F7F2E8" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" letter-spacing="2">${g.title}</text>
  <text x="350" y="530" text-anchor="middle" fill="#D4B886" font-family="'Inter', sans-serif" font-size="15">${g.sub}</text>
  <text x="350" y="570" text-anchor="middle" fill="#F7F2E8" fill-opacity="0.7" font-family="'Inter', sans-serif" font-size="13">GALLERY PHOTOGRAPH PLACEHOLDER</text>
  <text x="350" y="600" text-anchor="middle" fill="#B08D57" font-family="'Inter', sans-serif" font-size="12">Click to enlarge in Lightbox preview</text>
</svg>`;
  fs.writeFileSync(path.join(imagesDir, `${g.id}.svg`), svg);
}

// Reel Posters (9:16 vertical)
const reelItems = [
  { id: 'reel-poster-1', title: 'Our Love Story', sub: '9:16 Vertical Video Placeholder' },
  { id: 'reel-poster-2', title: 'Cinematic Montage', sub: '9:16 Vertical Video Placeholder' },
  { id: 'reel-poster-3', title: 'Sakharpuda Announcement', sub: '9:16 Vertical Video Placeholder' },
];

for (const r of reelItems) {
  const svg = `<svg width="540" height="960" viewBox="0 0 540 960" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg_${r.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3F352F" />
      <stop offset="40%" stop-color="#701F2B" />
      <stop offset="100%" stop-color="#4F131D" />
    </linearGradient>
  </defs>
  <rect width="540" height="960" fill="url(#bg_${r.id})" />
  <rect x="20" y="20" width="500" height="920" rx="14" stroke="#B08D57" stroke-width="2" fill="none" />
  <!-- Video Reel Play Button Graphic -->
  <circle cx="270" cy="440" r="50" fill="#B08D57" fill-opacity="0.3" stroke="#D4B886" stroke-width="2" />
  <path d="M260 415L290 440L260 465V415Z" fill="#F7F2E8" />
  <text x="270" y="540" text-anchor="middle" fill="#F7F2E8" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" letter-spacing="1.5">${r.title}</text>
  <text x="270" y="580" text-anchor="middle" fill="#D4B886" font-family="'Inter', sans-serif" font-size="14">${r.sub}</text>
  <text x="270" y="620" text-anchor="middle" fill="#F7F2E8" fill-opacity="0.75" font-family="'Inter', sans-serif" font-size="13">Replace with .mp4 video file in public/assets/videos/</text>
  <text x="270" y="650" text-anchor="middle" fill="#B08D57" font-family="'Inter', sans-serif" font-size="12">Aspect ratio: 9:16 (1080 × 1920 px)</text>
</svg>`;
  fs.writeFileSync(path.join(videosDir, `${r.id}.svg`), svg);
}

// Audio README
const audioReadme = `# Audio Assets

Place your traditional instrumental Maharashtrian music file here (e.g., \`shehnai-ambient.mp3\`).

- Format: MP3 or AAC
- Recommended style: Instrumental Shehnai, Sitar, Flute, or auspicious Mangalashtak
- Recommended size: under 5 MB for fast mobile loading
- Update the filename in \`src/content/event.ts\` under \`media.backgroundAudioSrc\`

If no audio file is provided, the music controls remain gracefully hidden or disabled.
`;
fs.writeFileSync(path.join(audioDir, 'README.md'), audioReadme);

console.log('All placeholder assets generated successfully.');
