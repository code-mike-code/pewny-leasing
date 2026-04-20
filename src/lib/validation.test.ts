import { describe, it, expect } from 'vitest'
import { validateNIP, validateEmail, validatePhone } from './validation'

describe('Forms: Validation', () => {
  describe('NIP Validation', () => {
    it('should pass for a 10-digit NIP', () => {
      expect(validateNIP('5261645000')).toBe(true);
      expect(validateNIP('526-164-50-00')).toBe(true);
      expect(validateNIP('7740001454')).toBe(true);
      expect(validateNIP('1234567890')).toBe(true);
    });

    it('should reject an invalid NIP', () => {
      expect(validateNIP('5261645')).toBe(false);      // Too short
      expect(validateNIP('526164500012')).toBe(false); // Too long
      expect(validateNIP('abcdefghij')).toBe(false);   // Letters
    });
  });

  describe('Email Validation', () => {
    it('should accept valid email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('test@example')).toBe(false);
      expect(validateEmail('test.example.com')).toBe(false);
      expect(validateEmail('test@.com')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
    });
  });

  describe('Phone Validation', () => {
    it('should accept valid phone numbers', () => {
      expect(validatePhone('123456789')).toBe(true);
      expect(validatePhone('123 456 789')).toBe(true);
      expect(validatePhone('+48 123 456 789')).toBe(true);
      expect(validatePhone('+48123456789')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false);          // Too short
      expect(validatePhone('invalid')).toBe(false);      // Contains letters
      expect(validatePhone('+48 123 phone')).toBe(false);
    });
  });
});
