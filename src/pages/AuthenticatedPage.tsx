import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from '@tanstack/react-router';

import { AuthenticationContext } from '../Context/Authentication';

export const AuthenticatedPage: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const authenticationContext = useContext(AuthenticationContext);
  const location = useLocation();

  // No auth on root page
  if (location.pathname === '/' || location.pathname === '/about') {
    return <>{children}</>;
  }

  if (!authenticationContext.isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return <>{children}</>;
};
