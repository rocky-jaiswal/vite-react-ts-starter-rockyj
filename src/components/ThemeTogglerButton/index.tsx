import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { ThemeContext } from '../../Context/Themes'

export const ThemeTogglerButton: React.FC = () => {
  const theme = useContext(ThemeContext)

  const { t } = useTranslation()

  return (
    <button onClick={theme.toggleTheme} className="rounded-sm p-4">
      {t('ThemeTogglerButton.toggleTheme')}
    </button>
  )
}
