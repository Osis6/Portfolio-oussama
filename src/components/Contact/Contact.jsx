/** @format */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.description')}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon' />
          <a href='mailto:bounou.oussama@gmail.com'>bounou.oussama@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt='LinkedIn icon'
          />
          <a href='https://www.linkedin.com/in/oussamabounou/' target='_blank'>
            linkedin.com/oussambounou
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon' />
          <a href='https://www.github.com/Osis6' target='_blank'>
            github.com/oussamabounou
          </a>
        </li>
      </ul>
    </footer>
  );
};
