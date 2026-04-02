export function validateNIP(nip: string): boolean {
  // Usuń myślniki i spacje
  const cleanNip = nip.replace(/[\s-]/g, '');
  if (cleanNip.length !== 10) return false;
  
  if (!/^\d{10}$/.test(cleanNip)) return false;

  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanNip[i], 10) * weights[i];
  }

  const checksum = sum % 11;
  return checksum === parseInt(cleanNip[9], 10);
}

export function validateEmail(email: string): boolean {
  // Prosty regex weryfikujący standardowy format x@y.z
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // Długość: typowo 9 cyfr, możliwość prefiksu dającego do 15 cyfr np. +48 123 456 789
  const digitsOnly = phone.replace(/[\s\-\+]/g, '');
  
  if (digitsOnly.length < 9 || digitsOnly.length > 15) return false;
  
  // Zezwalaj tylko na opcjonalny +, cyfry, myślniki i spacje
  const phoneStructureRegex = /^\+?[0-9\s\-]+$/;
  return phoneStructureRegex.test(phone);
}
