/** @format */

import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Oussama BOUNOU</h1>
        <p className={styles.description}>
          A seasoned full-stack developer with a passion for crafting dynamic
          and scalable web applications. With a solid foundation built over two
          years of hands-on experience, I specialize in leveraging the power of
          React and NodeJS to bring innovative ideas to life. Reach out if you'd
          like to learn more!
        </p>
        <a href='mailto:myemail@email.com' className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt='Hero image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
