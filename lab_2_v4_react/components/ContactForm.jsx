import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []); 

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative w-full max-w-md transform rounded-xl bg-white p-6 shadow-2xl transition-all dark:bg-[#2a2a2a] sm:p-8"
        onClick={(e) => e.stopPropagation()} 
      >

        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-3 text-3xl font-bold text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
        >
          &times;
        </button>

        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Зв'яжіться зі мною
        </h2>
        
        <form action="https://formspree.io/f/meelrnyq" method="POST" className="flex flex-col gap-4 bg-white dark:bg-[#1e1e1e] p-4 rounded-lg">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Ім'я:</label>
            <input type="text" id="name" name="name" required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white" />
          </div>
          
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Email:</label>
            <input type="email" id="email" name="email" required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white" />
          </div>
          
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Номер телефону:</label>
            <input type="tel" id="phone" name="phone" required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white" />
          </div>
          
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">Ваше повідомлення:</label>
            <textarea id="message" name="message" rows="4" required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white"></textarea>
          </div>
          
          <button type="submit" className="mt-2 w-full rounded-md bg-blue-600 py-3 text-lg font-bold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-[#2a2a2a]">
            Відправити
          </button>
        </form>

      </div>
    </div>
  );
}