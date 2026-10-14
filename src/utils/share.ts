export interface SharePayload {
  title: string;
  text: string;
  url: string;
}

/**
 * Invokes native Web Share API if supported.
 * Returns true if native share succeeded, false otherwise.
 */
export async function shareNative(payload: SharePayload): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(payload);
      return true;
    } catch (err: unknown) {
      // User cancelled share or aborted
      if (err instanceof Error && err.name === 'AbortError') {
        return true;
      }
      return false;
    }
  }
  return false;
}

/**
 * Generates direct WhatsApp share intent URL.
 */
export function getWhatsAppShareUrl(text: string, url: string): string {
  const content = `${text}\n\n${url}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`;
}

/**
 * Copies text to clipboard with legacy fallback.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
