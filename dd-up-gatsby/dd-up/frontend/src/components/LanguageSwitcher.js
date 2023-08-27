import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';

function LanguageSwitcher() {
  const intl = useIntl();

  const changeLanguage = (language) => {

    // Get the current URL and remove the language prefix (if present)
    const currentPath = window.location.pathname;

      let newPath;

      if (currentPath.startsWith(`/${intl.locale}/`)) {

        console.log('ddd');
        newPath = currentPath.replace(`/${intl.locale}/`, `/${language}/`);
      } else {
        console.log('ddd2');
        newPath = `/${language}`;
      }
      

    // Use navigate to change the language and update the URL
    navigate(newPath);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('de')}>French</button>
      {/* Add buttons for other languages */}
    </div>
  );
}

export default LanguageSwitcher;