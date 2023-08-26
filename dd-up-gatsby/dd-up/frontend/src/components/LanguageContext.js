
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};