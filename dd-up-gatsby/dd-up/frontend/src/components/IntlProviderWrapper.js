import React from "react";
import { IntlProvider } from "react-intl";
import { useLanguage } from "./LanguageContext";
import enMessages from "../locales/en.json";
import deMessages from "../locales/de.json";

const IntlProviderWrapper = ({ children }) => {
  const { currentLanguage } = useLanguage();
  let messages;

  

  console.log(currentLanguage);

  if (currentLanguage === "de") {
    messages = deMessages;
  } else {
    messages = enMessages;
  }

  return (
    <IntlProvider locale={currentLanguage} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;