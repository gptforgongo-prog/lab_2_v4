export default function AboutMe() {
  return (
    <section>
      <div className="bg-yellow-300 border-[4px] border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_rgba(0,0,0,1)]">
        <h2 className="text-3xl font-black text-black uppercase mb-4 tracking-tight flex items-center gap-3">
          <span className="text-4xl">👋</span> Profile
        </h2>
        <p className="text-black font-semibold leading-relaxed text-lg">
          I am passionate about uncovering business insights through data analysis and transforming them into actionable strategies. I excel at bridging the gap between business needs and technical solutions, with a strong focus on delivering value and driving organizational growth.
        </p>
      </div>
    </section>
  );
}