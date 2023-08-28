import React, { useState, useEffect, useRef } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';

function LanguageSwitcher() {
	const intl = useIntl();

	

	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Обработчик клика по заголовку
	const handleTitleClick = () => {
		setIsOpen(!isOpen);
	};

	// Обработчик клика по пункту списка
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

	// Обработчик клика вне области выпадающего меню
	const handleOutsideClick = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		// Добавляем обработчик клика для закрытия выпадающего меню при клике вне области
		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			// Удаляем обработчик клика при размонтировании компонента
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);


	return (
	<div className={`header-dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
		<div className="header-dropdown-title" onClick={handleTitleClick}>{intl.formatMessage({ id: "langDropdown" })}<i></i>
		</div>
		<div className="header-dropdown-container">
		<ul>
          {intl.locale === 'en' ? (
            <>
              <li className={'active'} onClick={() => handleItemClick('en')}>ENG</li>
              <li onClick={() => handleItemClick('de')}>DE</li>
            </>
          ) : (
            <>
				<li className={'active'} onClick={() => handleItemClick('de')}>DE</li>
              <li onClick={() => handleItemClick('en')}>ENG</li>
            </>
          )}
        </ul>
		</div>
	</div>
	);
}

export default LanguageSwitcher;