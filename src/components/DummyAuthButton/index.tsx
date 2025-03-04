import React from 'react';
import { useContext } from 'react';

import { AuthenticationContext } from '../../context/Authentication';
import { dispatchForAuthenticationStore } from '/@/store';

export const DummyAuthButton: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);

  return (
    <button
      onClick={() => {
        if (authenticationContext.isAuthenticated) {
          dispatchForAuthenticationStore({ type: 'SIGNOUT' });
        } else {
          dispatchForAuthenticationStore({ type: 'SIGNIN' });
        }
      }}
      className="rounded-sm p-4"
    >
      <span>{authenticationContext.isAuthenticated ? 'Sign Out' : 'Sign In'}</span>
    </button>
  );
};
