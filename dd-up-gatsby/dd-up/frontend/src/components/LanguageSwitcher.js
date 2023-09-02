import React, { useState, useEffect, useRef } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';

function LanguageSwitcher() {
	const intl = useIntl();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleTitleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = (language) => {
		setIsOpen(false);
		const currentPath = window.location.pathname;
		let newPath;
		if (currentPath.startsWith(`/${intl.locale}/`)) {
			newPath = currentPath.replace(`/${intl.locale}/`, `/${language}/`);
		} else {
			newPath = `/${language}`;
		}
		navigate(newPath);
	};

	const handleOutsideClick = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	return (
	<div className={`header-dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
		<button type="button" className="header-dropdown-title" onClick={handleTitleClick}>{intl.formatMessage({ id: "langDropdown" })}<i></i></button>
		<div className="header-dropdown-container">
		<ul>
          {intl.locale === 'en' ? (
            <>
              <li><button type="button" className={'active'} onClick={() => handleItemClick('en')}>ENG</button></li>
			  <li><button type="button" onClick={() => handleItemClick('de')}>DE</button></li>
            </>
          ) : (
            <>
				<li><button type="button" className={'active'} onClick={() => handleItemClick('de')}>DE</button></li>
            	<li><button type="button" onClick={() => handleItemClick('en')}>ENG</button></li>
            </>
          )}
        </ul>
		</div>
	</div>
	);
}

export default LanguageSwitcher;