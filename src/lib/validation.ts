export function validateNIP(nip: string): boolean {
  // Strip hyphens and spaces
  const cleanNip = nip.replace(/[\s-]/g, '');
  if (cleanNip.length !== 10) return false;

  if (/\D/.test(cleanNip)) return false;

  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanNip[i], 10) * weights[i];
  }

  const checksum = sum % 11;
  return checksum === parseInt(cleanNip[9], 10);
}

export function validateEmail(email: string): boolean {
  // Simple regex validating the standard x@y.z format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // Length: typically 9 digits; prefix allowed up to 15 digits total (e.g. +48 123 456 789)
  const digitsOnly = phone.replace(/[\s\-\+]/g, '');

  if (digitsOnly.length < 9 || digitsOnly.length > 15) return false;

  // Allow optional leading +, digits, hyphens and spaces only
  const phoneStructureRegex = /^\+?[0-9\s\-]+$/;
  return phoneStructureRegex.test(phone);
}
