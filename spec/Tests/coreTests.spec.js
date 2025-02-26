import { getCoupons, calculateDiscount, validateUserInput, isPriceInRange, 
         isValidUsername, canDrive, fetchData, Stack, createProduct, 
         isStrongPassword } from '../../src/core.js';

describe('Core Functions Test Suite', () => {
  describe('getCoupons', () => {
    const coupons = getCoupons();
    
    it('should return an array of coupons', () => {
      expect(Array.isArray(coupons)).toBe(true);
    });

    it('should have correct coupon structure', () => {
      coupons.forEach(coupon => {
        expect(coupon.code).toBeDefined();
        expect(coupon.discount).toBeDefined();
      });
    });
  });

  describe('calculateDiscount', () => {
    it('calculates correct discounts for valid inputs', () => {
      expect(calculateDiscount(100, 'SAVE10')).toBe(90);
      expect(calculateDiscount(100, 'SAVE20')).toBe(80);
    });

    it('handles invalid inputs', () => {
      expect(calculateDiscount(-100, 'SAVE10')).toBe('Invalid price');
      expect(calculateDiscount(100, null)).toBe('Invalid discount code');
    });
  });

  describe('validateUserInput', () => {
    it('validates correct inputs', () => {
      expect(validateUserInput('john', 20)).toBe('Validation successful');
    });

    it('detects invalid username', () => {
      expect(validateUserInput('jo', 20)).toContain('Invalid username');
    });

    it('detects invalid age', () => {
      expect(validateUserInput('john', 17)).toContain('Invalid age');
    });
    it('both invalid', () => {
        expect(validateUserInput('jo', 17)).toEqual(['Invalid age','Invalid username']);
      });
  });

  describe('isPriceInRange', () => {
    it('identifies prices within range', () => {
      expect(isPriceInRange(50, 0, 100)).toBe(true);
    });

    it('identifies prices at boundaries', () => {
      expect(isPriceInRange(0, 0, 100)).toBe(true);
      expect(isPriceInRange(100, 0, 100)).toBe(true);
    });

    it('identifies prices outside range', () => {
      expect(isPriceInRange(-1, 0, 100)).toBe(false);
      expect(isPriceInRange(101, 0, 100)).toBe(false);
    });
  });

  describe('isValidUsername', () => {
    it('validates usernames within bounds', () => {
      expect(isValidUsername('user123')).toBe(true);
    });

    it('rejects too short usernames', () => {
      expect(isValidUsername('usr')).toBe(false);
    });

    it('rejects too long usernames', () => {
      expect(isValidUsername('verylongusername123')).toBe(false);
    });
  });

  describe('canDrive', () => {
    it('validates legal driving age by country', () => {
      expect(canDrive(16, 'US')).toBe(true);
      expect(canDrive(17, 'UK')).toBe(true);
    });

    it('rejects underage drivers', () => {
      expect(canDrive(15, 'US')).toBe(false);
      expect(canDrive(16, 'UK')).toBe(false);
    });

    it('handles invalid country codes', () => {
      expect(canDrive(18, 'FR')).toBe('Invalid country code');
    });
  });

  describe('fetchData', () => {
    it('should return data asynchronously', async () => {
      const data = await fetchData();
      expect(Array.isArray(data)).toBe(true);
      expect(data).toEqual([1, 2, 3]);
    });
  });

  describe('Stack', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it('starts empty', () => {
      expect(stack.isEmpty()).toBe(true);
      expect(stack.size()).toBe(0);
    });

    it('can push and pop items', () => {
      stack.push(1);
      expect(stack.pop()).toBe(1);
    });

    it('throws error when popping empty stack', () => {
      expect(() => stack.pop()).toThrowError('Stack is empty');
    });

    it('can peek at top item', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
      expect(stack.size()).toBe(2);
    });
  });

  describe('createProduct', () => {
    it('creates valid product', () => {
      const result = createProduct({ name: 'Test', price: 10 });
      expect(result.success).toBe(true);
    });

    it('validates product name', () => {
      const result = createProduct({ price: 10 });
      expect(result.success).toBe(false);
      expect(result.error.code).toBe('invalid_name');
    });

    it('validates product price', () => {
      const result = createProduct({ name: 'Test', price: 0 });
      expect(result.success).toBe(false);
      expect(result.error.code).toBe('invalid_price');
    });
  });

  describe('isStrongPassword', () => {
    it('accepts strong passwords', () => {
      expect(isStrongPassword('Test123!')).toBe(true);
    });

    it('rejects short passwords', () => {
      expect(isStrongPassword('Tt1!')).toBe(false);
    });

    it('requires uppercase letters', () => {
      expect(isStrongPassword('test123!')).toBe(false);
    });

    it('requires lowercase letters', () => {
      expect(isStrongPassword('TEST123!')).toBe(false);
    });

    it('requires numbers', () => {
      expect(isStrongPassword('TestTest!')).toBe(false);
    });
  });
});