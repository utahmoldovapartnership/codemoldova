import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Matches SPA expectation: new route starts at the top like a full page load. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
