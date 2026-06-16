import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const chineseUnlocked = new URLSearchParams(window.location.search).get('lang') === 'zh'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(chineseUnlocked ? 'zh' : 'es')
  const toggle = () => setLang(l => l === 'es' ? 'zh' : 'es')
  return (
    <LanguageContext.Provider value={{ lang, toggle, chineseUnlocked }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
