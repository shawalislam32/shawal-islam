'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
