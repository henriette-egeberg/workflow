// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { getUsername } from './storage.js'; // adjust path
// rest of the file stays the same

beforeEach(() => {
  localStorage.clear();
});

describe('getUsername', () => {
  it('returns the name from the user object in storage', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'John' }));
    expect(getUsername()).toBe('John');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
