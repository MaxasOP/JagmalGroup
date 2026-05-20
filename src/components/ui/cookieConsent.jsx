import { useState, useEffect } from 'react'

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

  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-3xl mx-4 bg-white/95 dark:bg-slate-900/95 border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg flex items-center gap-4 z-50">
      <div className="text-sm text-slate-800 dark:text-slate-200">
        This website uses cookies. We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
      </div>
      <div className="flex-shrink-0">
        <button onClick={accept} className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
          Accept
        </button>
      </div>
    </div>
  )
}

export { CookieConsent }
