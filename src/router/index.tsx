// import React from 'react'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { createRouter, createRoute, createRootRoute, redirect } from '@tanstack/react-router';

import { Root } from '../layout/Root';
import { HomePage } from '../pages/IndexPage';
import { AboutPage } from '../pages/AboutPage';
import { UsersPage } from '../pages/UsersPage';
import { ErrorPage } from '../pages/ErrorPage';

import { useAuthenticationStore } from '/@/store';

const rootRoute = createRootRoute({
  component: Root,
  errorComponent: ErrorPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UsersPage,
  beforeLoad: async () => {
    const isAuthenticated = useAuthenticationStore.getState().isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: '/',
      });
    }
  },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, usersRoute]);

export const router = createRouter({ routeTree });
