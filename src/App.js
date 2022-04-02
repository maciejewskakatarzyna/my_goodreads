import React from 'react';
import AuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp/UnauthenticatedApp';

import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';

const App = () => {
  const auth = useAuth();

  return <Router>{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Router>;
};

export default App;
