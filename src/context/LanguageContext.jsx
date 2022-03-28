import React, { createContext, useState, useEffect } from 'react';
import { english, spanish } from '../global';

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(english);
  const [switchLanguage, setSwithLanguage] = useState(true);

  useEffect(() => {
    if (switchLanguage) {
      setLanguage(english);
    } else {
      setLanguage(spanish);
    }
  }, [switchLanguage]);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, setSwithLanguage }}>
      { children }
    </LanguageContext.Provider>
  )
}