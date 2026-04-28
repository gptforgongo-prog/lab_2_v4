import React, { useState, useEffect } from 'react';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/4/comments");
                if (!response.ok) {
                    throw new Error("Помилка при завантаженні даних");
                }
                const data = await response.json();
                setComments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    return (
        <section className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 mt-10 transition-colors duration-300">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-800 dark:text-white mb-6 border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                Відгуки попередніх роботодавців
            </h2>

            {loading && <p className="text-slate-500 dark:text-slate-400">Завантаження...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm border-l-4 border-l-blue-500 flex flex-col h-full transition-colors duration-300 hover:shadow-md hover:-translate-y-1 transform"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1" title={comment.name}>
                                {comment.name.length > 30 ? comment.name.substring(0, 30) + "..." : comment.name}
                            </h3>
                            <a
                                href={`mailto:${comment.email}`}
                                className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-4 truncate inline-block transition-colors"
                                title={comment.email}
                            >
                                {comment.email}
                            </a>
                            <p className="text-slate-600 dark:text-slate-300 italic text-sm relative pt-4 border-t border-dashed border-slate-300 dark:border-slate-600 mt-auto leading-relaxed">
                                "{comment.body}"
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
