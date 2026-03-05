import React from 'react';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="col-span-full bg-white dark:bg-[#111] text-gray-900 dark:text-white p-10 md:px-10 md:py-12 relative transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      
      <button 
        onClick={toggleTheme}
        className="absolute top-6 right-6 md:top-8 md:right-10 px-4 py-2 bg-gray-100 text-gray-900 dark:bg-[#333] dark:text-white rounded-full font-bold shadow-sm hover:bg-gray-200 dark:hover:bg-[#444] border border-gray-300 dark:border-gray-600 transition-colors focus:outline-none"
      >
        {theme === 'light' ? 'Нічна тема' : 'Денна тема'}
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">Roman Sikorskyi</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
    </header>
  );
}