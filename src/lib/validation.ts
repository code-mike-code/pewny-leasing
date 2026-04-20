export function validateNIP(nip: string): boolean {
  const cleanNip = nip.replace(/[\s-]/g, '');
  return cleanNip.length === 10 && /^\d{10}$/.test(cleanNip);
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
