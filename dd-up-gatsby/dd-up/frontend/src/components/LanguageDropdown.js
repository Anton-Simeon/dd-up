import React from "react";
import { useLanguage } from "./LanguageContext";
import { FormattedMessage } from "react-intl";

const LanguageDropdown = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    
    changeLanguage(newLanguage);
  };

  

  return (
    <div>
      <label htmlFor="languageDropdown">
        <FormattedMessage id="chooseLanguage" />
      </label>
      <select
        id="languageDropdown"
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;