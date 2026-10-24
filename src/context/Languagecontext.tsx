import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations, getStoredLanguage, setStoredLanguage } from '../i18n/translations';
import { i } from 'framer-motion/client';

interface LanguageContextType{
    language: Language;
    setLanguage:(lang: Language) => void;
    t: Translations;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider: React.FC<{ children: React.ReactNode} >= ({children}) => {
    const[language,setLanguageState]= useState<Language>(getStoredLanguage);
    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        setStoredLanguage(lang);
    }
    const t= translations[language];
    return (
        <LanguageContext.Provider value={{language, setLanguage,t}}>
            {children}
        </LanguageContext.Provider>
    );
};
export const useLanguage =(): LanguageContextType => {
    const context =useContext(LanguageContext);
    if(!context) {
        throw new Error ('uselanguage must be used within a LanguageProvider');
    }
    return context;
};