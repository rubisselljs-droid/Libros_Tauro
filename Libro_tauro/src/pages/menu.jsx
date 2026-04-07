import { IoSearchSharp } from "react-icons/io5";
import Descados from "../components/utils/Destacados";
import LibroDes from "../components/utils/LibroDes";

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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 sm:text-sm">
            <span className="font-semibold uppercase tracking-[0.35em] text-slate-300">Tendencias:</span>
            <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 transition hover:border-[#4fd1c5] hover:text-white">
              Ficción Clásica
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 transition hover:border-[#4fd1c5] hover:text-white">
              Revolución Tech
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 transition hover:border-[#4fd1c5] hover:text-white">
              Minimalismo
            </span>
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

      {/** Sección de boletín mensual con diseño igual al de la imagen */}
      <section className="bg-[#04080d] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-linear-to-r from-[#56e3cc] via-[#2bb2a1] to-[#0f7a81] shadow-[0_35px_90px_-45px_rgba(15,47,60,0.8)]">
          <div className="relative px-8 py-10 sm:px-12 sm:py-14">
            <div className="absolute right-8 top-8 flex items-center gap-2">
              <span className="relative inline-flex h-4 w-4">
                <span className="absolute left-1/2 top-0 h-1 w-1 rounded-full bg-white/70 -translate-x-1/2"></span>
                <span className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-white/70 -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
              </span>
              <span className="relative inline-flex h-3 w-3">
                <span className="absolute left-1/2 top-0 h-1 w-1 rounded-full bg-white/60 -translate-x-1/2"></span>
                <span className="absolute left-0 top-1/2 h-1 w-1 rounded-full bg-white/60 -translate-y-1/2"></span>
              </span>
              <span className="block h-2 w-2 rounded-full bg-white/30"></span>
            </div>

            <div className="space-y-5 text-left text-black sm:max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Cura tu bandeja de entrada con nuestro boletín mensual.
              </h2>
              <p className="text-sm text-slate-100/90 sm:text-base">
                Novedades, selecciones del editor y ensayos literarios entregados una vez al mes.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <label htmlFor="newsletter-email" className="sr-only"> <strong>Correo electrónico</strong></label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="curador@ejemplo.com"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-4 text-sm text-white placeholder:text-slate-200 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20 sm:text-base"
                />
                <button className="inline-flex shrink-0 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:text-base">
                  Únete al Club
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
