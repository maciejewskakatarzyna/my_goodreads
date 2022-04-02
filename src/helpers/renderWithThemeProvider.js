import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { AuthProvider } from '../hooks/useAuth';
import BooksProvider from '../providers/BooksProvider';

export const renderWithProviders = children => {
  return render(
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BooksProvider>{children}</BooksProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
