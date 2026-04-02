import { describe, it, expect } from 'vitest'
import { validateNIP, validateEmail, validatePhone } from './validation'

describe('Formularze: Walidacja', () => {
  describe('NIP Validation', () => {
    it('powinien przejść dla poprawnego NIP', () => {
      // 1234563218 is typically a valid mod NIP example, wait, I'll use real example structures for mathematical test.
      // Przykładowy realny NIP (KPRM): 5261645000
      expect(validateNIP('5261645000')).toBe(true);
      expect(validateNIP('526-164-50-00')).toBe(true);
      // NIP Orlen:
      expect(validateNIP('7740001454')).toBe(true);
    });

    it('powinien odrzucić błędny NIP', () => {
      expect(validateNIP('1234567890')).toBe(false); // Błędna suma kontrolna
      expect(validateNIP('5261645')).toBe(false); // Za krótki
      expect(validateNIP('526164500012')).toBe(false); // Za długi
      expect(validateNIP('abcdefghij')).toBe(false); // Litery zamiast NIP
    });
  });

  describe('Email Validation', () => {
    it('powinien poprawnie walidować email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('powinien odrzucić błędny email', () => {
      expect(validateEmail('test@example')).toBe(false);
      expect(validateEmail('test.example.com')).toBe(false);
      expect(validateEmail('test@.com')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
    });
  });

  describe('Phone Validation', () => {
    it('powinien zaakceptować poprawne nr telefonów', () => {
      expect(validatePhone('123456789')).toBe(true);
      expect(validatePhone('123 456 789')).toBe(true);
      expect(validatePhone('+48 123 456 789')).toBe(true);
      expect(validatePhone('+48123456789')).toBe(true);
    });

    it('powinien odrzucić błędne nr telefonów', () => {
      expect(validatePhone('123')).toBe(false); // Za krótki
      expect(validatePhone('invalid')).toBe(false); // Zawiera litery
      expect(validatePhone('+48 123 phone')).toBe(false);
    });
  });
});
