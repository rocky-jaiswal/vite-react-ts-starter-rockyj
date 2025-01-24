import React, { useContext } from 'react';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useLocation } from '@tanstack/react-router';

import { ThemeTogglerButton } from '/@/components/ThemeTogglerButton';
import { DummyAuthButton } from '/@/components/DummyAuthButton';
import { ChangeLanguageButton } from '/@/components/ChangeLanguageButton';
import { dispatchForThemeStore } from '/@/store';
import { AuthenticationContext } from '../../context/Authentication';

type Props = unknown;

export const Nav: React.FC<Props> = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const { pathname } = useLocation();

  const { t } = useTranslation();

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          {t('navbar.welcome')}
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>

        <Link to="/about" className="btn btn-ghost">
          About
        </Link>

        {authenticationContext.isAuthenticated ? (
          <>
            <Link to="/users" className="btn btn-ghost">
              Users
            </Link>
          </>
        ) : (
          <div />
        )}

        <div className="hidden flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium text-blue-600 sm:hidden md:hidden lg:flex xl:flex">
          {`Current Routing Path: "${pathname}"`}
        </div>

        <div>
          <ThemeTogglerButton handleClick={() => dispatchForThemeStore({ type: 'CHANGE_THEME' })} />
          <DummyAuthButton />
          <ChangeLanguageButton />
        </div>
      </div>
    </nav>
  );
};
