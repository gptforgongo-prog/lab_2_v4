export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-6 flex items-center gap-4 tracking-tight transition-colors duration-300">
        Education <span className="h-[2px] flex-1 bg-slate-100 dark:bg-slate-700 transition-colors duration-300"></span>
      </h2>
      <div className="bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white transition-colors duration-300">Lviv National Polytechnic University</h3>
        <p className="text-emerald-600 dark:text-emerald-500 font-medium mt-1 transition-colors duration-300">BA of Computer Science, Cybersecurity</p>
      </div>
    </section>
  );
}