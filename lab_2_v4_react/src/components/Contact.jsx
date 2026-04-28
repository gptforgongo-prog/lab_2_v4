export default function Contact() {
  return (
    <section>
      <h2 className="text-white text-sm font-bold uppercase tracking-widest mb-5 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-emerald-500"></span> Contact
      </h2>
      <ul className="flex flex-col gap-4 text-sm font-medium">
        <li>
          <a href="mailto:oleh.brezvin.kb.2023@lpnu.ua" className="hover:text-emerald-400 transition-colors">
            oleh.brezvin.kb.2023@lpnu.ua
          </a>
        </li>
        <li>
          <a href="tel:+380681356767" className="hover:text-emerald-400 transition-colors">
            +380 68 135 67 67
          </a>
        </li>
        <li className="text-slate-400">Lviv, Ukraine</li>
      </ul>
    </section>
  );
}