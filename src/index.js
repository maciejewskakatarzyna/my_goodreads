import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { worker } from './mocks/browser';
import { AuthProvider } from './hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import BooksProvider from './providers/BooksProvider';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BooksProvider>
          <GlobalStyle />
          <App />
        </BooksProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
