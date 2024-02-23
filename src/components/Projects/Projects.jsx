/** @format */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    import(`../../data/projects.${language}.json`)
      .then((module) => {
        setProjectsData(module.default.projects || []);
      })
      .catch((error) => {
        console.error(
          `Failed to load projects for language ${language}`,
          error
        );
      });
  }, [language]);

  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>projects</h2>
      <div className={styles.projects}>
        {projectsData.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
