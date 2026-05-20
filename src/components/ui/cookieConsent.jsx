/*
  CookieConsent component (commented out for later use)

  To restore: remove the surrounding comment markers and re-import in App.jsx:
    import { CookieConsent } from './components/ui/cookieConsent';
    <CookieConsent />

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent')
      if (!consent) setVisible(true)
    } catch (e) {
      // ignore (e.g., SSR or restricted storage)
      setVisible(false)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem('cookie_consent', 'true')
    } catch (e) {
      // ignore
    }
    setVisible(false)
  }

  const dismiss = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 w-auto sm:w-full sm:max-w-3xl bg-white/95 dark:bg-slate-900/95 border border-gray-200 dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-2xl z-50">
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss cookie notice"
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex flex-col gap-4 pr-10 sm:pr-12 sm:flex-row sm:items-center sm:gap-5">
        <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
          <span className="sm:hidden">This site uses cookies to improve your experience.</span>
          <span className="hidden sm:inline">
            This website uses cookies. We use cookies to analyze website traffic and optimize your website experience.
          </span>
        </div>
        <div className="flex-shrink-0 sm:ml-auto">
        <button
          onClick={accept}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#c49d2f] sm:w-auto"
        >
          Accept
        </button>
        </div>
      </div>
    </div>
  )
}

export { CookieConsent }

*/
