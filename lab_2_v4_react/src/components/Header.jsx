export default function Header() {
    return (
        <header className="pb-8 mt-4">
            <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300 uppercase tracking-widest mb-2 leading-none drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                Oleh <br /> Brezvin
            </h1>
            <div className="inline-block mt-6 px-4 py-2 bg-fuchsia-500 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] transform -rotate-2">
                <p className="text-black font-black tracking-widest uppercase text-sm">
                    Business Analyst
                </p>
            </div>
        </header>
    );
}