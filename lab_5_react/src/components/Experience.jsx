export default function Experience() {
  return (
    <section>
      <h2 className="text-4xl font-black text-black dark:text-white uppercase mb-10 flex items-center gap-4 tracking-tighter">
        Experience <span className="h-[6px] flex-1 bg-black dark:bg-white"></span>
      </h2>

      <div className="space-y-12 border-l-[6px] border-black dark:border-white ml-4 pl-10">
        
        <div className="relative bg-white dark:bg-slate-800 border-[6px] border-black p-6 rounded-2xl shadow-[10px_10px_0_rgba(0,0,0,1)] dark:shadow-[10px_10px_0_rgba(255,255,255,1)]">
          <div className="absolute w-8 h-8 bg-cyan-400 rounded-full -left-[55px] top-4 border-[6px] border-black dark:border-white shadow-[2px_2px_0_rgba(0,0,0,1)]"></div>
          <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-widest rounded-md mb-3">
            Jan 2025 - Present
          </div>
          <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight">Senior Business Analyst</h3>
          <p className="mt-3 text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-lg">
            Led cross-functional teams in developing business strategies and digital transformation initiatives. Managed complex projects with focus on user research, data analysis, and delivering measurable business outcomes.
          </p>
        </div>

        <div className="relative bg-white dark:bg-slate-800 border-[6px] border-black p-6 rounded-2xl shadow-[10px_10px_0_rgba(0,0,0,1)] dark:shadow-[10px_10px_0_rgba(255,255,255,1)]">
          <div className="absolute w-8 h-8 bg-fuchsia-400 rounded-full -left-[55px] top-4 border-[6px] border-black dark:border-white shadow-[2px_2px_0_rgba(0,0,0,1)]"></div>
          <div className="inline-block px-3 py-1 bg-yellow-300 text-black font-black text-xs uppercase tracking-widest border-[3px] border-black rounded-md mb-3">
            Jan 2023 - Dec 2024
          </div>
          <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight">Business Analyst</h3>
          <p className="mt-3 text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-lg">
            Analyzed business requirements and translated them into technical specifications. Collaborated with stakeholders to identify process improvements and implemented solutions that increased operational efficiency by 30%.
          </p>
        </div>

      </div>
    </section>
  );
}