import { useState, useEffect } from 'react';
import Header from './components/Header';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-slate-900 py-10 px-4 flex justify-center font-sans antialiased selection:bg-emerald-300 selection:text-emerald-900 transition-colors duration-300 relative">
      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 z-40 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-full font-bold cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        {isDarkMode ? "Денна тема" : "Нічна тема"}
      </button>

      <div className="max-w-6xl w-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-colors duration-300">

        <aside className="md:w-1/3 bg-slate-900 dark:bg-slate-950 text-slate-300 p-8 md:p-12 flex flex-col gap-10 transition-colors duration-300">
          <Header />
          <Contact />
          <Skills />
        </aside>

        <main className="md:w-2/3 bg-white dark:bg-slate-800 p-8 md:p-12 flex flex-col gap-10 text-slate-800 dark:text-slate-200 transition-colors duration-300">
          <AboutMe />
          <Objective />
          <Experience />
          <Education />
          <Reviews />
          <Footer />
        </main>

      </div>

      <ContactForm />
    </div>
  );
}