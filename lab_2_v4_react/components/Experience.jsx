export default function Experience() {
  return (
    <section className="md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-7 p-8 md:px-12 bg-white dark:bg-[#1e1e1e]">
      <h2 className="text-2xl font-bold mb-8 md:mt-8 md:ml-12 text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-green-500 rounded-full inline-block"></span> Experience
      </h2>
      
      <ol className="list-decimal pl-6 md:ml-16 space-y-10 marker:text-green-600 dark:marker:text-green-400 marker:font-bold marker:text-lg">
        <li className="relative group">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Trainee FrontEnd Developer</h3>
          <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full mb-3 mt-2 border border-gray-200 dark:border-gray-600">Jan 2023 - Dec 2024</span>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Joined the dev team and was mentored by senior devs to improve code quality and efficiency. Created static and dynamic websites with animations.</p>
        </li>

        <li className="relative group">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">IT Responsible</h3>
          <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full mb-3 mt-2 border border-gray-200 dark:border-gray-600">Dec 2025 - Apr 2026</span>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Making partnership and event websites in Next.js.</p>
        </li>
      </ol>
    </section>
  );
}