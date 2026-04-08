import { IoSearchSharp } from "react-icons/io5";
import Descados from "../components/utils/Destacados";
import LibroDes from "../components/utils/LibroDes";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#05070b] py-24 px-4 sm:px-6 lg:px-8">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,209,197,0.18),transparent_35%)]"></div>
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4fd1c5]/10 blur-3xl"></div>
        <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[#0df1ce]/10 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[#2c7a7b]/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Busca tu
            </h1>
            <h2 className="mt-2 text-4xl font-bold text-[#4fd1c5] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              próxima aventura
            </h2>
          </div>

          <p className="mx-auto max-w-2xl text-sm text-slate-400 sm:text-base md:text-lg">
            Encuentra libros únicos por título, autor o género y accede a recomendaciones hechas para ti.
          </p>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="relative">
              <span className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 text-slate-400 sm:inline-flex">
                <IoSearchSharp className="h-5 w-5" />
              </span>

              <input
                type="text"
                placeholder="Títulos, autores o géneros..."
                className="w-full rounded-full border border-slate-700 bg-[#111827] py-4 pr-36 pl-14 text-sm text-slate-100 shadow-[0_25px_90px_-40px_rgba(0,0,0,0.8)] outline-none transition focus:border-[#4fd1c5] focus:ring-2 focus:ring-[#4fd1c5]/20 sm:text-base"
              />

              <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#4fd1c5] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#38b2ac] sm:px-8 sm:text-base">
                Curar
              </button>
            </div>
          </div>

          {}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 sm:text-sm">

            <span className="font-semibold uppercase tracking-[0.35em] text-slate-300">Tendencias:</span>

            <Link
  to="/categoria/ficcion-clasica"
  className="block w-40 rounded-xl overflow-hidden bg-[#111827] border border-slate-800 hover:border-[#4fd1c5] transition shadow-lg"
>
  <img
    src="/libros/Portadas/ficcion.jpg"
    alt="Ficción clásica"
    className="w-full h-40 object-cover"
  />
  <div className="p-3 text-center text-white font-semibold">
    Ficción clásica
  </div>

            </Link>

            <span className="hidden sm:inline">•</span>

            <Link
              to="/categoria/revolucion-tech"
              className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 transition hover:text-white hover:border-[#4fd1c5]"
            >
              Revolución Tech
            </Link>

            <span className="hidden sm:inline">•</span>

            <Link
              to="/categoria/minimalismo"
              className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 transition hover:text-white hover:border-[#4fd1c5]"
            >
              Minimalismo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1117] py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#4fd1c5]">Élite de Curación</p>
            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Libros Destacados</h3>
          </div>
          <LibroDes />
        </div>
      </section>

      <section className="bg-[#090c11] py-12 px-4 sm:px-6 lg:px-8">
        <Descados />
      </section>
    </>
  );
}