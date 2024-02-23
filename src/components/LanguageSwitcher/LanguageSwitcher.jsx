/** @format */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles['language-switcher']}>
      {' '}
      {}
      <button
        onClick={() => changeLanguage('en')}
        className={styles['language-btn']}
      >
        En
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={styles['language-btn']}
      >
        Fr
      </button>
    </div>
  );
}

export default LanguageSwitcher;
