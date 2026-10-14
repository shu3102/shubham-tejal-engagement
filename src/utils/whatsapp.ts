/**
 * Cleans and formats phone number for WhatsApp direct link.
 * WhatsApp requires international format digits without '+' or symbols.
 */
export function formatWhatsAppUrl(phoneNumber: string, message: string): string {
  if (!phoneNumber || phoneNumber.trim() === '') {
    return '';
  }

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    return '';
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function hasValidWhatsAppNumber(phoneNumber?: string): boolean {
  if (!phoneNumber) return false;
  const digits = phoneNumber.replace(/[^0-9]/g, '');
  return digits.length >= 10;
}
