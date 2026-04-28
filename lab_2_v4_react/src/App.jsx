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
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 py-12 px-4 flex justify-center antialiased selection:bg-yellow-300 selection:text-black transition-colors duration-500 relative">
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-40 bg-yellow-400 dark:bg-yellow-500 text-black border-[3px] border-black px-6 py-2.5 rounded-xl font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200"
      >
        {isDarkMode ? "Денна тема" : "Нічна тема"}
      </button>

      <div className="max-w-6xl w-full bg-white dark:bg-slate-900 border-[6px] border-black rounded-[2rem] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:flex-row transition-all duration-500">

        <aside className="md:w-[35%] bg-slate-900 dark:bg-black text-white p-10 md:p-12 flex flex-col gap-10 transition-colors duration-500 relative overflow-hidden border-b-[6px] md:border-b-0 md:border-r-[6px] border-black">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-600/30 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-fuchsia-600/30 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-10">
            <Header />
            <Contact />
            <Skills />
          </div>
        </aside>

        <main className="md:w-[65%] bg-white dark:bg-slate-800 p-10 md:p-14 flex flex-col gap-12 text-black dark:text-slate-200 transition-colors duration-500">
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