import { IoSearchSharp } from "react-icons/io5";
import Descados from "../components/utils/Destacados";
import LibroDes from "../components/utils/LibroDes";
export function Menu() {

    const Librolista= [
        {}
    ]


  return (
    <>
      <section className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.15),transparent_70%)]"></div>

        <div className="max-w-3xl w-full text-center z-10">
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
              Busca tu
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#4fd1c5] tracking-tight">
              próxima <span className="text-[#4fd1c5]">aventura</span>
            </h1>
          </div>

          <div className="relative mx-auto mb-8 md:mb-12">
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
              <span className="sm:absolute sm:left-6 text-gray-500">
                <IoSearchSharp className="w-5 sm:w-6 h-5 sm:h-6 mx-auto sm:mx-0" />
              </span>
              <input
                type="text"
                placeholder="Títulos, autores o géneros..."
                className="w-full sm:pl-16 px-4 sm:pr-36 py-3 sm:py-5 rounded-full border border-gray-700 bg-[#1a202c] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] focus:border-transparent text-gray-200 placeholder-gray-500 text-sm sm:text-lg"
              />

              <button className="w-full sm:absolute sm:right-3 px-6 sm:px-8 py-3 bg-[#38b2ac] hover:bg-[#4fd1c5] text-[#0d1117] font-semibold rounded-full transition-colors duration-200 text-sm sm:text-lg">
                Buscar
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-400">
            <span className="font-semibold text-gray-300 tracking-wider">
              TENDENCIAS:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="hover:text-white cursor-pointer transition-colors">
                Ficción Clásica
              </span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Revolución Tech
              </span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Minimalismo
              </span>
            </div>
          </div>
        </div>
      </section>

        <section>
            <LibroDes/>
        </section>

      <section>
        <Descados/>
      </section>
    </>
  );
}
