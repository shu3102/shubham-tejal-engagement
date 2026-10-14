# Shubham & Tejal — Content Checklist & Publication Guide

This checklist details all assets, texts, links, and approvals needed to transform the invitation website from its provisional placeholder state to the final production release.

---

## 1. Couple Names & Devanagari Spellings

- [ ] **Groom Name (English):** Confirm `Shubham Somwanshi`
- [ ] **Groom Name (Marathi):** Confirm provisional spelling `शुभम सोमवंशी`
- [ ] **Bride Name (English):** Confirm `Tejal Khairnar`
- [ ] **Bride Name (Marathi):** Confirm provisional spelling `तेजल खैरnar` (or `तेजल खैरनार`)
- [ ] **Couples Display Names:** Confirm `Shubham & Tejal` / `शुभम आणि तेजल`

> **File to update:** `src/content/event.ts` (`groom`, `bride`, `displayCoupleNames`)

---

## 2. Event Date, Time & Venue Verification

- [ ] **Ceremony Date:** Saturday, 12 December 2026
- [ ] **Ceremony Time:** 11:00 AM onwards (IST)
- [ ] **Venue Name:** Yashwant Lawns, Nashik
- [ ] **Venue Address:** Yashwant Lawns, Near Nandur Naka, Nashik Aurngabad Road, Wadivarhe, Swami Samartha Nagar, Nashik-422003, Maharashtra
- [ ] **Google Maps Link:** Provide exact verified Google Maps URL (e.g. `https://maps.app.goo.gl/...` or `https://maps.google.com/?q=...`)

> **File to update:** `src/content/event.ts` (`venue.googleMapsUrl`)

---

## 3. RSVP & WhatsApp Communication

- [ ] **WhatsApp RSVP Phone Number:** Supply the international format phone number (e.g., `+919876543210`)
- [ ] **Contact Family Names:** Confirm family contact labels (`Somwanshi & Khairnar Family` / `सोमवंशी व खैरनार परिवार`)
- [ ] **Prefilled WhatsApp Message:** Review and customize the prefilled RSVP confirmation text if desired.

> **File to update:** `src/content/event.ts` (`rsvp.whatsappNumber`)

---

## 4. Couple Photographs & Gallery Assets

Place your final high-resolution photo assets in `public/assets/images/`:

- [ ] **Hero Couple Photo:** Replace `public/assets/images/placeholders/hero-placeholder.svg` with your preferred landscape couple photograph (e.g. `hero.jpg`, 1920×1080 px recommended).
- [ ] **Shubham's Individual Portrait:** Replace `public/assets/images/placeholders/shubham-portrait.svg` (portrait orientation, 4:5 aspect ratio).
- [ ] **Tejal's Individual Portrait:** Replace `public/assets/images/placeholders/tejal-portrait.svg` (portrait orientation, 4:5 aspect ratio).
- [ ] **Gallery Photographs (6 or more):**
  - [ ] Couple Portraits
  - [ ] Pre-engagement photoshoot pictures
  - [ ] Candid smiling moments
  - [ ] Traditional attire shots

> **File to update:** `src/content/gallery.ts` (update `src`, `titleEn`, `titleMr`, `captionEn`, `captionMr`)

---

## 5. Relationship Story & Timeline Milestones

Replace neutral placeholder texts `[Add your story here]` with your authentic journey:

- [ ] **Chapter 01 (How We Met):** College memories and first meeting
- [ ] **Chapter 02 (When Our Relationship Began):** How friendship transitioned into love
- [ ] **Chapter 03 (Memorable Moments):** Special trips, coffee conversations, adventures
- [ ] **Chapter 04 (Important Milestones):** Supporting each other's career & dreams
- [ ] **Chapter 05 (When Families Came Together):** Parents' meeting and blessing the union
- [ ] **Chapter 06 (The Journey Toward Our Sakharpuda):** The anticipation for 12 December 2026

> **File to update:** `src/content/story.ts` (`descriptionEn`, `descriptionMr`, and optional milestone photos)

---

## 6. Three Vertical (9:16) Reels

Export your vertical reels as `.mp4` files (1080×1920 px) and save them to `public/assets/videos/`:

- [ ] **Reel 1 (Our Love Story):** `public/assets/videos/love-story.mp4`
- [ ] **Reel 2 (Cinematic Montage):** `public/assets/videos/couple-montage.mp4`
- [ ] **Reel 3 (Sakharpuda Announcement):** `public/assets/videos/announcement.mp4`
- [ ] **Poster Thumbnails:** (Optional) Provide high-resolution poster images for each reel.

> **File to update:** `src/content/reels.ts` (`src`, `poster`, `duration`)

---

## 7. Background Instrumental Music

- [ ] **Audio Track:** Place an MP3 file (e.g. classical Shehnai, Sitar, Flute, or traditional Maharashtrian Mangalashtak) in `public/assets/audio/shehnai.mp3`.
- [ ] **Audio Metadata:** Set `audioTitleEn` and `audioTitleMr`.
- [ ] **Permissions:** Ensure the track is royalty-free, licensed, or family-owned.

> **File to update:** `src/content/event.ts` (`media.backgroundAudioSrc`)

---

## 8. Family Blessings & Acknowledgments

- [ ] **Family-Approved Blessing Quote:** Supply the blessing message from parents/elders in both English and Marathi.
- [ ] **Attribution:** Confirm how the family should be named (e.g., *“With love and blessings from Somwanshi & Khairnar Families”*).

> **File to update:** `src/content/en.ts` and `src/content/mr.ts` (`blessings` section)

---

## 9. Final Production URL & Sharing

- [ ] **Production URL:** Once the GitHub repository is published, configure the final public URL (e.g. `https://shubhamsomwanshi.github.io/shubham-tejal-engagement/` or a custom domain like `https://shubhamtejal.com`).

> **File to update:** `src/content/event.ts` (`site.productionUrl`)

---

## 10. Pre-Publication Review & Sign-Off

- [ ] Review site on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify English and Marathi toggle across every section
- [ ] Test WhatsApp RSVP button on mobile
- [ ] Test Add to Calendar (`.ics`) file import on Apple Calendar and Google Calendar
- [ ] Verify QR code scans correctly on phones
- [ ] Obtain explicit sign-off from Shubham, Tejal, and both families
- [ ] Trigger deployment via GitHub Actions (`workflow_dispatch`)
