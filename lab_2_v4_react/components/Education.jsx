export default function Education() {
  return (
    <section className="md:col-start-1 md:col-end-2 md:row-start-5 p-8 border-b md:border-r border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <span className="w-1.5 h-5 bg-yellow-500 rounded-full inline-block"></span> Education
      </h2>
      <p className="text-gray-800 dark:text-gray-200 font-semibold">Lviv Polytechnic National University</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">BA of Computer Science, Cybersecurity</p>
    </section>
  );
}