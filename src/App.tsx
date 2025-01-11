import React from 'react';
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import { RouterProvider } from '@tanstack/react-router';
import LanguageDetector from 'i18next-browser-languagedetector';

import { enJSON } from '/@/locales/en';
import { deJSON } from '/@/locales/de';
import { router } from './router';

import '/@/styles/global.css';

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...enJSON },
      de: { ...deJSON },
    },
    fallbackLng: 'en', // Set the initial language of the App
  });

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
