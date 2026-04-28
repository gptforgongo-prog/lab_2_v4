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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-950 dark:via-indigo-950/30 dark:to-slate-950 py-12 px-4 flex justify-center antialiased selection:bg-indigo-300 selection:text-indigo-900 transition-colors duration-500 relative">
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        {isDarkMode ? "Денна тема" : "Нічна тема"}
      </button>

      <div className="max-w-6xl w-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,112,184,0.07)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white dark:border-slate-700/50 overflow-hidden flex flex-col md:flex-row transition-all duration-500">

        <aside className="md:w-[35%] bg-gradient-to-br from-indigo-600 to-violet-800 dark:from-indigo-950 dark:to-slate-950 text-white p-10 md:p-12 flex flex-col gap-10 transition-colors duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-10">
            <Header />
            <Contact />
            <Skills />
          </div>
        </aside>

        <main className="md:w-[65%] bg-transparent p-10 md:p-14 flex flex-col gap-12 text-slate-800 dark:text-slate-200 transition-colors duration-500">
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