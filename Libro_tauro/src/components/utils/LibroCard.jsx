export default function LibroCard({ titulo, autor, imagen, pdf }) {
  return (
    <a
      href={pdf}
      target="_blank"
      className="group block w-full max-w-xs rounded-2xl overflow-hidden bg-[#111827] border border-slate-800 hover:border-[#4fd1c5] transition shadow-lg"
    >
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{titulo}</h3>
        <p className="text-sm text-slate-400 mt-1">{autor}</p>
      </div>
    </a>
  );
}