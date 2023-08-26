import React from "react";
import { LanguageProvider } from "./src/components/LanguageContext";
import IntlProviderWrapper from "./src/components/IntlProviderWrapper";

export const wrapRootElement = ({ element }) => {
  return (
    <LanguageProvider>
      <IntlProviderWrapper>{element}</IntlProviderWrapper>
    </LanguageProvider>
  );
};