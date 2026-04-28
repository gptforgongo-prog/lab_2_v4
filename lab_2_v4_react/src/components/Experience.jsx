export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-8 flex items-center gap-4 tracking-tight transition-colors duration-300">
        Experience <span className="h-[2px] flex-1 bg-slate-100 dark:bg-slate-700 transition-colors duration-300"></span>
      </h2>

      <div className="space-y-10 border-l-2 border-slate-200 dark:border-slate-700 ml-2 pl-8 transition-colors duration-300">

        <div className="relative">
          <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[39px] top-1.5 border-4 border-white dark:border-slate-800 shadow-sm transition-colors duration-300"></div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Senior Business Analyst</h3>
          <p className="text-emerald-600 dark:text-emerald-500 font-bold text-sm mt-1 tracking-wide uppercase transition-colors duration-300">Jan 2025 - Present</p>
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
            Led cross-functional teams in developing business strategies and digital transformation initiatives. Managed complex projects with focus on user research, data analysis, and delivering measurable business outcomes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded-full -left-[39px] top-1.5 border-4 border-white dark:border-slate-800 shadow-sm transition-colors duration-300"></div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Business Analyst</h3>
          <p className="text-slate-500 font-bold text-sm mt-1 tracking-wide uppercase">Jan 2023 - Dec 2024</p>
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
            Analyzed business requirements and translated them into technical specifications. Collaborated with stakeholders to identify process improvements and implemented solutions that increased operational efficiency by 30%.
          </p>
        </div>

      </div>
    </section>
  );
}