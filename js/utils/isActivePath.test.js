import { describe, it, expect } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  it('returns true for root path when path is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('returns true for root path when path is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  it('returns true when current path includes the href', () => {
    expect(isActivePath('/venue', '/venue/123')).toBe(true);
  });

  it('returns false when paths do not match', () => {
    expect(isActivePath('/about', '/contact')).toBe(false);
  });
});
