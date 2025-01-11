import React from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { dispatchForLocaleStore } from '/@/store';

import { LocaleContext } from '../../Context/Locale';

export const ChangeLanguageButton: React.FC<unknown> = (_props: unknown) => {
  const {
    i18n: { changeLanguage },
  } = useTranslation();
  const localeContext = useContext(LocaleContext);

  const handleChangeLanguage = () => {
    const newLanguage = localeContext.currentLanguage === 'en' ? 'de' : 'en';
    dispatchForLocaleStore({ type: 'CHANGE_LANGUAGE' });
    changeLanguage(newLanguage);
  };

  return (
    <button onClick={() => handleChangeLanguage()} className="rounded-sm p-4">
      EN|DE
    </button>
  );
};
