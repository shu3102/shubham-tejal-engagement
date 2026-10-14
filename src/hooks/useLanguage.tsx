import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations } from '../content/types';
import { enTranslations } from '../content/en';
import { mrTranslations } from '../content/mr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'shubham_tejal_invitation_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'mr') {
        return saved;
      }
    } catch {
      // ignore storage access errors
    }
    return 'en';
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'mr' : 'en'));
  };

  const t = lang === 'mr' ? mrTranslations : enTranslations;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
