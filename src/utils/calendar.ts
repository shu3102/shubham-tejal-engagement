import { EventConfig } from '../content/types';

/**
 * Escapes characters for iCalendar RFC 5545 specification.
 */
function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

/**
 * Generates and triggers download of an .ics calendar file for the Sakharpuda event.
 * Event start time is Saturday, 12 December 2026 at 11:00 AM IST (UTC+05:30).
 * In UTC: 2026-12-12T05:30:00Z.
 */
export function downloadCalendarEvent(config: EventConfig): void {
  const startUtc = '20261212T053000Z';
  // Duration: default 4 hours -> ends at 09:30 UTC / 3:00 PM IST
  const durationHours = config.date.calendarDurationHours || 4;
  const endHourUtc = 5 + durationHours;
  const endUtc = `20261212T${String(endHourUtc).padStart(2, '0')}3000Z`;

  const now = new Date();
  const dtStamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const title = `${config.groom.shortNameEn} & ${config.bride.shortNameEn} — Sakharpuda`;
  const location = config.venue.addressLineEn;
  const description = [
    `Traditional Maharashtrian Sakharpuda Ceremony of ${config.groom.fullNameEn} and ${config.bride.fullNameEn}.`,
    '',
    `Date: ${config.date.fullDateEn}`,
    `Time: ${config.date.timeEn}`,
    `Venue: ${config.venue.nameEn}`,
    `Address: ${config.venue.addressLineEn}`,
    '',
    'We warmly invite you to join us and bestow your blessings on this joyous occasion.',
  ].join('\n');

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shubham & Tejal//Sakharpuda Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:sakharpuda-shubham-tejal-20261212@invitation',
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  const icsContent = icsLines.join('\r\n');
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'shubham-tejal-sakharpuda.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
