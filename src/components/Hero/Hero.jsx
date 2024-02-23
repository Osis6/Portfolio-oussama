/** @format */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.description}>{t('hero.description')}</p>
        <a href='mailto:myemail@email.com' className={styles.contactBtn}>
          {t('hero.contactBtn')}
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt={t('hero.imageAlt')}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
