import { devices } from '@playwright/test';

export default {
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 13'] },
    },
  ],
  testDir: './tests',
  fullyParallel: true,
  reporter: '**',
};
