import React, { useState, useEffect } from 'react';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    const closeHandler = () => setIsOpen(false);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={closeHandler}
        >
            <div
                className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 transition-transform duration-500 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closeHandler}
                    className="absolute top-4 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors text-3xl font-light leading-none"
                    aria-label="Close"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6">
                    Форма зворотнього зв'язку
                </h2>

                <form action="https://formspree.io/f/xbdqgqwr" method="POST" className="flex flex-col gap-4">
                    <div className="flex flex-col text-left">
                        <label htmlFor="fb-name" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                            Ім'я
                        </label>
                        <input
                            type="text"
                            id="fb-name"
                            name="name"
                            required
                            placeholder="Ваше ім'я"
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 transition-all text-base placeholder-slate-400"
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="fb-email" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="fb-email"
                            name="email"
                            required
                            placeholder="Ваш Email"
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 transition-all text-base placeholder-slate-400"
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="fb-phone" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                            Номер телефону
                        </label>
                        <input
                            type="tel"
                            id="fb-phone"
                            name="phone"
                            required
                            placeholder="Ваш номер телефону"
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 transition-all text-base placeholder-slate-400"
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="fb-message" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                            Повідомлення
                        </label>
                        <textarea
                            id="fb-message"
                            name="message"
                            rows="4"
                            required
                            placeholder="Залиште свій відгук..."
                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 transition-all text-base placeholder-slate-400 resize-y"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-lg"
                    >
                        Відправити
                    </button>
                </form>
            </div>
        </div>
    );
}
