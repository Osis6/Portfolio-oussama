/** @format */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        OB
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href='#about'>{t('navbar.about')}</a>
          </li>
          <li>
            <a href='#experience'>{t('navbar.experience')}</a>
          </li>
          <li>
            <a href='#projects'>{t('navbar.projects')}</a>
          </li>
          <li>
            <a href='#contact'>{t('navbar.contact')}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
