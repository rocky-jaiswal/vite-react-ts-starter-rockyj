import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { AuthenticationContext } from '../Context/Authentication'

export const AuthenticatedPage: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext)
  const location = useLocation()

  if (location.pathname === '/' || location.pathname === '/home') {
    return <div />
  }

  if (!authenticationContext.jsonToken) {
    // Redirect them to the / page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return <div />
}