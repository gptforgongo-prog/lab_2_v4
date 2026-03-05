export default function Skills() {
  const skillsList = [
    "HTML/CSS/JS/TS", "React.js/Next.js", "Tailwind CSS", "Git/GitHub",
    "Node.js/Express.js", "MongoDB/PostgreSQL", "RESTful API", "Docker",
    "Jest", "CI/CD", "Figma/Photoshop"
  ];

  return (
    <section className="md:col-start-1 md:col-end-2 md:row-start-6 p-8 md:border-r border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <span className="w-1.5 h-5 bg-red-500 rounded-full inline-block"></span> Skills
      </h2>
      
      <ul className="flex flex-wrap gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {skillsList.map((skill, index) => (
            <li key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-1.5 rounded-lg shadow-sm hover:scale-105 hover:shadow-md hover:border-red-300 dark:hover:border-red-500 transition-all cursor-default text-gray-700 dark:text-gray-300">
            {skill}
            </li>
        ))}
      </ul>
    </section>
  );
}