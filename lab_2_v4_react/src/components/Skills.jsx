export default function Skills() {
    const skillsList = [
        "Requirements Engineering", "Process Analysis", "Data Visualization",
        "Stakeholder Management", "Strategic Planning", "User Research",
        "Agile/Scrum", "SQL & DB Design", "BI Tools",
        "Documentation", "JIRA/Confluence"
    ];

    return (
        <section>
            <h2 className="text-white text-2xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-10 h-[6px] bg-yellow-400"></span> Core Skills
            </h2>
            <div className="flex flex-wrap gap-3">
                {skillsList.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-cyan-400 border-[3px] border-black text-sm font-black text-black uppercase tracking-wide shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] transition-all cursor-pointer"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}