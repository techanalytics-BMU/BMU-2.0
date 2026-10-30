// Form checks shared by the browser (contact form, lead popup) and the server (login, signup,
// saving leads) – one set of rules everywhere.

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** A 10-digit Indian number, whether or not they typed +91 / 0 in front of it */
export function isPhone(value: string) {
  let digits = value.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return /^\d{10}$/.test(digits);
}
