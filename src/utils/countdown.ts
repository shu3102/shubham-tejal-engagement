export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isPast: boolean;
  totalSecondsRemaining: number;
}

/**
 * Calculates time remaining until target ISO timestamp (12 Dec 2026 11:00 AM IST).
 * Uses UTC timestamp comparison so it works reliably in any browser timezone.
 */
export function calculateTimeRemaining(targetIsoTimestamp: string): CountdownResult {
  const targetTime = new Date(targetIsoTimestamp).getTime();
  const now = new Date().getTime();
  const diff = targetTime - now;

  // Ceremony window is considered active for 24 hours after start time
  const oneDayMs = 24 * 60 * 60 * 1000;

  if (diff <= 0) {
    const isLive = Math.abs(diff) <= oneDayMs;
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isLive,
      isPast: !isLive,
      totalSecondsRemaining: 0,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    isLive: false,
    isPast: false,
    totalSecondsRemaining: Math.floor(diff / 1000),
  };
}
