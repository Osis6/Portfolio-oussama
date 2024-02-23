/** @format */

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    import(`../../data/history.${language}.json`).then((module) => {
      setHistory(
        module.default && Array.isArray(module.default) ? module.default : []
      );
    });
  }, [language]);

  return (
    <section className={styles.container} id='experience'>
      {}
    </section>
  );
};
