# Shubham & Tejal — Luxury Maharashtrian Sakharpuda Invitation

A bilingual, luxury digital invitation website created for the traditional Maharashtrian engagement ceremony (**Sakharpuda**) of **Shubham Somwanshi & Tejal Khairnar**.

- **Date:** Saturday, 12 December 2026
- **Time:** 11:00 AM onwards (IST)
- **Venue:** Yashwant Lawns, Nashik, Maharashtra
- **Languages:** English and Marathi (मराठी)
- **Aesthetic:** Royal Maharashtrian × Modern Romantic × Luxury Editorial (Ivory, Antique Gold, Deep Maroon, Warm Charcoal)

---

## 1. Technology Stack

- **Framework:** React 18 + TypeScript
- **Bundler:** Vite
- **Styling:** Modern CSS with CSS custom properties (variables), responsive layout, and Devanagari typography
- **Typography:**
  - English Headings: *Cormorant Garamond*
  - English Body: *Inter*
  - Marathi Headings: *Noto Serif Devanagari*
  - Marathi Body: *Noto Sans Devanagari*
- **Icons:** Lucide React
- **QR Code:** `qrcode` canvas generator
- **Calendar:** Dynamic RFC 5545 `.ics` file generator with IST timezone calculation
- **Deployment:** GitHub Actions + GitHub Pages (static hosting, zero backend/database)

---

## 2. Prerequisites

- **Node.js:** v18.0.0 or higher (v22+ recommended)
- **npm:** v9.0.0 or higher
- **Git**

---

## 3. Quick Start (Local Development)

1. Clone or open the repository folder:
   ```bash
   cd /Users/shubhamsomwanshi/Downloads/Invitation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Test production build locally:
   ```bash
   npm run build
   npm run preview
   ```

---

## 4. Project Structure

```text
├── public/
│   └── assets/
│       ├── audio/
│       │   └── placeholders/    # Traditional instrumental music guide
│       ├── images/
│       │   └── placeholders/    # Hero, couple portraits, story, and gallery SVGs
│       └── videos/
│           └── placeholders/    # 9:16 vertical video reel posters
├── src/
│   ├── components/
│   │   ├── AudioPlayer.tsx      # Background instrumental music player (accessible, opt-in)
│   │   ├── CountdownTimer.tsx   # Live countdown to 12 Dec 2026 11:00 AM IST
│   │   ├── FloatingActions.tsx  # Mobile quick actions (RSVP, Calendar, Share)
│   │   ├── Header.tsx           # Sticky nav with language toggle & monogram
│   │   ├── LanguageToggle.tsx   # EN | मराठी language toggle switch
│   │   ├── Lightbox.tsx         # Accessible keyboard-navigable photo viewer
│   │   ├── Motifs.tsx           # Traditional Kalash, Lotus, Ganesha, and corner pieces
│   │   └── ShareModal.tsx       # QR code generator, WhatsApp intent & link copy
│   ├── content/
│   │   ├── types.ts             # Complete TypeScript interfaces
│   │   ├── event.ts             # Central event configuration & placeholders
│   │   ├── en.ts                # English UI and ceremony translations
│   │   ├── mr.ts                # Authentic Marathi UI and ceremony translations
│   │   ├── gallery.ts           # Gallery photo records & captions
│   │   ├── reels.ts             # 9:16 vertical reel video records
│   │   └── story.ts             # 6 relationship milestone entries
│   ├── hooks/
│   │   └── useLanguage.tsx      # Language provider with sessionStorage persistence
│   ├── sections/
│   │   ├── InvocationSection.tsx    # ॥ श्री गणेशाय नमः ॥ with traditional framing
│   │   ├── HeroSection.tsx          # Full-screen couple hero with countdown
│   │   ├── CoupleSection.tsx        # Editorial Shubham & Tejal introduction
│   │   ├── StorySection.tsx         # Love story timeline from college to Sakharpuda
│   │   ├── GallerySection.tsx       # Photo gallery with category filtering
│   │   ├── ReelsSection.tsx         # 3 vertical video reels
│   │   ├── SakharpudaSection.tsx    # Traditional Maharashtrian ceremony significance
│   │   ├── BlessingsSection.tsx     # Family blessings quote & acknowledgment
│   │   ├── EventDetailsSection.tsx  # Date, time, venue address, directions & .ics
│   │   ├── RsvpSection.tsx          # WhatsApp RSVP with prefilled bilingual messages
│   │   └── FooterSection.tsx        # Closing blessings, monogram, back-to-top
│   ├── styles/
│   │   ├── index.css            # Global CSS, resets, animations, responsive design
│   │   └── variables.css        # Palette (ivory, gold, maroon, charcoal) and typography
│   ├── utils/
│   │   ├── assetUrl.ts          # Resolves paths with GitHub Pages subpath support
│   │   ├── calendar.ts         # Generates downloadable RFC 5545 .ics calendar event
│   │   ├── countdown.ts        # Timezone-accurate countdown calculator
│   │   ├── share.ts            # Web Share API & clipboard copy utility
│   │   └── whatsapp.ts         # Phone formatting & WhatsApp intent builder
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions manual workflow for GitHub Pages
├── CONTENT-CHECKLIST.md         # Comprehensive checklist of required assets & texts
├── index.html                   # HTML entry point with Google Fonts & Open Graph meta
├── package.json
├── tsconfig.json
└── vite.config.ts               # Vite configuration with dynamic base path support
```

---

## 5. How to Update Content (Without Editing React Code)

All website content is cleanly decoupled in `src/content/`:

### A. Updating Names, Venue, Date, or WhatsApp Number
Edit **`src/content/event.ts`**:
- **Names:** Update `groom.fullNameEn`, `groom.fullNameMr`, `bride.fullNameEn`, `bride.fullNameMr`.
- **Venue & Map:** Update `venue.googleMapsUrl` with your verified Google Maps share link.
- **WhatsApp RSVP:** Set `rsvp.whatsappNumber: '+919XXXXXXXXX'`. The RSVP button automatically activates without changing component code.
- **Production URL:** Set `site.productionUrl: 'https://shubham-somwanshi.github.io/shubham-tejal-engagement/'`.

### B. Updating English or Marathi Translations
- English: Edit **`src/content/en.ts`**
- Marathi: Edit **`src/content/mr.ts`**

### C. Updating Relationship Story Milestones
Edit **`src/content/story.ts`**:
- Replace `[Add your story here]` with your actual memories for the 6 milestones.
- You can add, reorder, or delete entries directly in the array.

### D. Adding Real Photographs
1. Save your photos in `public/assets/images/` (e.g. `hero-photo.jpg`, `shubham.jpg`, `tejal.jpg`, `gallery-1.jpg`).
2. Update the image paths in:
   - `src/content/event.ts` (`groom.image`, `bride.image`)
   - `src/content/gallery.ts` (`src`, `titleEn`, `titleMr`, `captionEn`, `captionMr`)

### E. Adding 9:16 Vertical Reels
1. Save your `.mp4` video clips in `public/assets/videos/` (e.g. `love-story.mp4`, `couple-montage.mp4`, `announcement.mp4`).
2. Update **`src/content/reels.ts`** with the paths:
   ```ts
   src: './assets/videos/love-story.mp4'
   ```

### F. Adding Background Music
1. Save your traditional instrumental track in `public/assets/audio/` (e.g. `shehnai.mp3`).
2. Update **`src/content/event.ts`**:
   ```ts
   media: {
     backgroundAudioSrc: './assets/audio/shehnai.mp3',
     ...
   }
   ```

---

## 6. Git & GitHub Repository Setup

To push this project to a new GitHub repository:

1. Create a repository on GitHub named `shubham-tejal-engagement`:
   - Via GitHub Web: Go to [https://github.com/new](https://github.com/new) and name it `shubham-tejal-engagement`.
   - Leave "Initialize with README" unchecked.

2. Link your local project to the GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/shubham-tejal-engagement.git
   git branch -M main
   git push -u origin main
   ```

---

## 7. GitHub Pages Deployment (Publishing)

The project includes an automated deployment workflow: `.github/workflows/deploy.yml`.

### Enable GitHub Pages in your GitHub Repository:
1. Open your repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.

### Safe Publication Workflow:
The workflow is configured with `workflow_dispatch` (manual trigger). **The site will NEVER be deployed until you explicitly approve it:**

1. When you are ready to publish, navigate to the **Actions** tab on GitHub.
2. Select **Deploy Invitation to GitHub Pages**.
3. Click **Run workflow** → select branch `main` → click **Run workflow**.
4. The action will build the site, package `dist/`, and publish it to:
   `https://YOUR_USERNAME.github.io/shubham-tejal-engagement/`

---

## 8. Testing Base Paths Locally

To test how the site renders under the GitHub Pages subpath:
```bash
VITE_BASE_PATH=/shubham-tejal-engagement/ npm run build
npm run preview
```
All assets (fonts, images, SVGs, audio) use relative or dynamically resolved URLs via `getAssetUrl()`.
