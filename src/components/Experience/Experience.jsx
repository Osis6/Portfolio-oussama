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
    import(`../../data/history.${language}.json`)
      .then((module) => {
        setHistory(
          module.default && Array.isArray(module.default.history)
            ? module.default.history
            : []
        );
      })
      .catch((error) => {
        console.error(`Failed to load history for language ${language}`, error);
      });
  }, [language]);

  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Render Skills */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Render History/Experience */}
        <ul className={styles.history}>
          {history.length > 0 ? (
            history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))
          ) : (
            <li className={styles.historyItem}>
              No experience data available.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};
