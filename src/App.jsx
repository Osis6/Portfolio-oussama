/** @format */

// import styles from './App.module.css';
// import { About } from './components/About/About';
// import { Contact } from './components/Contact/Contact';
// import { Experience } from './components/Experience/Experience';
// import { Hero } from './components/Hero/Hero';
// import { Navbar } from './components/Navbar/Navbar';
// import { Projects } from './components/Projects/Projects';

// function App() {
//   return (
//     <div className={styles.App}>
//       <Navbar />
//       <Hero />
//       <About />
//       <Experience />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;
// App.jsx
import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'; // Import LanguageSwitcher

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <LanguageSwitcher />
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
