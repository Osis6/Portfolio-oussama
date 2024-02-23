/** @format */

import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>{t('about.title')}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt={t('about.altText')}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/cursorIcon.png')}
              alt={t('about.cursorAltText')}
            />
            <div className={styles.aboutItemText}>
              <h3>{t('about.frontendTitle')}</h3>
              <p>{t('about.frontendDescription')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/serverIcon.png')}
              alt={t('about.serverAltText')}
            />
            <div className={styles.aboutItemText}>
              <h3>{t('about.backendTitle')}</h3>
              <p>{t('about.backendDescription')}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/cursorIcon.png')}
              alt={t('about.uiAltText')}
            />
            <div className={styles.aboutItemText}>
              <h3>{t('about.uiTitle')}</h3>
              <p>{t('about.uiDescription')}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
