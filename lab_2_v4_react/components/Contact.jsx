export default function Contact() {
  return (
    <section className="md:col-span-2 flex flex-col md:flex-row justify-between items-stretch border-b border-dashed border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
      <a href="mailto:roman.sikorskyi.kb.2023@lpnu.ua" className="flex-1 text-center p-4 md:border-r border-dashed border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-medium flex items-center justify-center">
        roman.sikorskyi.kb.2023@lpnu.ua
      </a>
      <a href="tel:+380969334567" className="flex-1 text-center p-4 border-t md:border-t-0 md:border-r border-dashed border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-medium flex items-center justify-center">
        096 933 45 67
      </a>
      <p className="flex-1 text-center p-4 border-t md:border-t-0 font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
        Lviv, UA
      </p>
    </section>
  );
}