import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { worker } from './mocks/browser';
import { AuthProvider } from './hooks/useAuth';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
