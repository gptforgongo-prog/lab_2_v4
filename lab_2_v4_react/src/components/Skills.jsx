export default function Skills() {
    const skillsList = [
        "Requirements Engineering", "Process Analysis", "Data Visualization",
        "Stakeholder Management", "Strategic Planning", "User Research",
        "Agile/Scrum", "SQL & DB Design", "BI Tools",
        "Documentation", "JIRA/Confluence"
    ];

    return (
        <section>
            <h2 className="text-white text-sm font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-emerald-500"></span> Core Skills
            </h2>
            <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-xs font-medium text-slate-300 whitespace-nowrap hover:bg-emerald-900/50 hover:border-emerald-500/50 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}