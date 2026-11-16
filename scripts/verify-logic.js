// Pure Node.js verification test for event date, timezone UTC conversion, countdown, and WhatsApp logic

const targetIso = '2026-12-12T11:00:00+05:30';

console.log('--- 1. Testing Event Configuration & Countdown ---');
console.log('Target ISO Timestamp (IST):', targetIso);

function calculateTimeRemaining(targetIsoTimestamp) {
  const targetTime = new Date(targetIsoTimestamp).getTime();
  const now = new Date().getTime();
  const diff = targetTime - now;
  const oneDayMs = 24 * 60 * 60 * 1000;

  if (diff <= 0) {
    const isLive = Math.abs(diff) <= oneDayMs;
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive, isPast: !isLive, totalSecondsRemaining: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isLive: false, isPast: false, totalSecondsRemaining: Math.floor(diff / 1000) };
}

const countdown = calculateTimeRemaining(targetIso);
console.log(`Countdown remaining from now: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds.`);
console.log(`Total seconds remaining: ${countdown.totalSecondsRemaining}`);

if (countdown.totalSecondsRemaining <= 0 || countdown.days < 0) {
  throw new Error('Countdown calculation error!');
}
console.log('✓ Countdown test PASSED.');

console.log('\n--- 2. Testing Calendar Date / Time in UTC ---');
// Saturday, 12 December 2026 11:00 AM IST
// IST is UTC+5:30.
// 11:00 AM IST = 05:30:00 UTC
const targetDate = new Date(targetIso);
console.log('Target Date UTC string:', targetDate.toUTCString());

const dtstartUtc = '20261212T053000Z';
const dtendUtc = '20261212T093000Z'; // 4 hours duration = 15:00 IST / 09:30 UTC

const utcYear = targetDate.getUTCFullYear();
const utcMonth = targetDate.getUTCMonth() + 1;
const utcDate = targetDate.getUTCDate();
const utcHours = targetDate.getUTCHours();
const utcMinutes = targetDate.getUTCMinutes();

if (utcYear !== 2026 || utcMonth !== 12 || utcDate !== 12 || utcHours !== 5 || utcMinutes !== 30) {
  throw new Error(`Unexpected UTC values: ${utcYear}-${utcMonth}-${utcDate} ${utcHours}:${utcMinutes}`);
}
console.log(`✓ Calendar UTC matches: ${utcYear}-12-12 at 05:30 UTC = 11:00 AM IST. DTSTART: ${dtstartUtc}, DTEND: ${dtendUtc}. PASSED.`);

console.log('\n--- 3. Testing WhatsApp URL Formatting & Placeholder State ---');
function formatWhatsAppUrl(phoneNumber, message) {
  if (!phoneNumber || phoneNumber.trim() === '') return '';
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  if (!cleanPhone || cleanPhone.length < 10) return '';
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

function hasValidWhatsAppNumber(phoneNumber) {
  if (!phoneNumber) return false;
  const digits = phoneNumber.replace(/[^0-9]/g, '');
  return digits.length >= 10;
}

// Case A: empty / unconfigured number
console.log('Has valid number when empty:', hasValidWhatsAppNumber(''));
console.log('Formatted URL when empty:', JSON.stringify(formatWhatsAppUrl('', 'Test message')));
if (hasValidWhatsAppNumber('') || formatWhatsAppUrl('', 'Test message') !== '') {
  throw new Error('Empty phone number should return empty string / false!');
}

// Case B: configured international phone number
const samplePhone = '+91 98765 43210';
const sampleMsg = 'Namaskar! We look forward to attending on 12 December 2026.';
const generatedUrl = formatWhatsAppUrl(samplePhone, sampleMsg);
console.log('Formatted URL with phone number:', generatedUrl);
if (!generatedUrl.startsWith('https://wa.me/919876543210?text=Namaskar')) {
  throw new Error('Configured phone number failed to format properly!');
}
console.log('✓ WhatsApp formatting test PASSED.');

console.log('\n--- 4. Testing .ics RFC 5545 Escaping ---');
function escapeIcsText(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

const sampleAddress = 'Yashwant Lawns, Near Nandur Naka, Nashik-422003, Maharashtra';
const escapedAddress = escapeIcsText(sampleAddress);
console.log('Original address:', sampleAddress);
console.log('Escaped address for .ics:', escapedAddress);
if (!escapedAddress.includes('\\,')) {
  throw new Error('.ics comma escaping failed!');
}
console.log('✓ .ics text escaping test PASSED.');

console.log('\n=========================================');
console.log('ALL TESTS PASSED SUCCESSFULLY! (4/4)');
console.log('=========================================');
