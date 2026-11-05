import { describe, it, expect } from 'vitest';
import { SITE_TITLE } from '@/lib/constants';

describe('Core Infrastructure', () => {
  it('should have the correct site title', () => {
    expect(SITE_TITLE).toBe('Villardonnel');
  });
});
