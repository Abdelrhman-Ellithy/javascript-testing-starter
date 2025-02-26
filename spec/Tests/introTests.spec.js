import { max, fizzBuzz } from '../../src/intro.js';
describe('Intro Test Suite', () => {
      describe('max function', () => {
        it('handles positive integers', () => {
          expect(max(5, 10)).toBe(10);
          expect(max(999, 998)).toBe(999);
        });

        it('handles negative numbers', () => {
          expect(max(-5, -10)).toBe(-5);
          expect(max(-1, 0)).toBe(0);
        });

        it('handles equal numbers', () => {
          expect(max(7, 7)).toBe(7);
          expect(max(-2, -2)).toBe(-2);
        });

        it('handles floating point numbers', () => {
          expect(max(3.14, 3.141)).toBe(3.141);
          expect(max(1e-28, 1e-29)).toBe(1e-28);
        });

        it('handles large numbers', () => {
          expect(max(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1))
            .toBe(Number.MAX_SAFE_INTEGER);
        });
    });

    describe('fizzBuzz function', () => {
        it('returns FizzBuzz for multiples of 3 and 5', () => {
          expect(fizzBuzz(15)).toBe('FizzBuzz');
          expect(fizzBuzz(30)).toBe('FizzBuzz');
          expect(fizzBuzz(0)).toBe('FizzBuzz');
        });

        it('returns Fizz for multiples of 3', () => {
          expect(fizzBuzz(3)).toBe('Fizz');
          expect(fizzBuzz(6)).toBe('Fizz');
          expect(fizzBuzz(99)).toBe('Fizz');
        });

        it('returns Buzz for multiples of 5', () => {
          expect(fizzBuzz(5)).toBe('Buzz');
          expect(fizzBuzz(10)).toBe('Buzz');
          expect(fizzBuzz(100)).toBe('Buzz');
        });

        it('returns number as string for non-multiples', () => {
          expect(fizzBuzz(1)).toBe('1');
          expect(fizzBuzz(7)).toBe('7');
          expect(fizzBuzz(98)).toBe('98');
        });
        it('negative values', () => {
          expect(fizzBuzz(-1)).toBe('-1');
          expect(fizzBuzz(-5)).toBe("Buzz");
          expect(fizzBuzz(-3)).toBe('Fizz');
        });
    });
});