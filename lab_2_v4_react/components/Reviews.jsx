import React, { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/28/comments")
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="col-span-full px-6 py-8 md:px-10 border-t border-dashed border-gray-300 bg-white dark:border-gray-700 dark:bg-black/80 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Відгуки попередніх роботодавців
      </h2>
      
      {isLoading ? (
        <p className="text-gray-500">Завантаження...</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-1 basis-[300px] bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 border-l-4 border-l-blue-500 rounded-lg p-5 shadow-sm transition-all"
            >
              <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 capitalize">{review.name}</h4>
              <a href={`mailto:${review.email}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">{review.email}</a>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-3">{review.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}