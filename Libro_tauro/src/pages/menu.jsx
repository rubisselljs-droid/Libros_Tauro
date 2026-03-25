import { IoSearchSharp } from "react-icons/io5";
import Descados from "../components/utils/Destacados";
export function Menu() {

    const Librolista= [
        {}
    ]


  return (
    <>
      <section className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.15),transparent_70%)]"></div>

        <div className="max-w-3xl w-full text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Busca tu
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-[#4fd1c5] tracking-tight">
              próxima <span className="text-[#4fd1c5]">aventura</span>
            </h1>
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="relative flex items-center">
              <span className="absolute left-6 text-gray-500">
                <IoSearchSharp className="w-6 h-6" />
              </span>
              <input
                type="text"
                placeholder="Títulos, autores o géneros..."
                className="w-full pl-16 pr-36 py-5 rounded-full border border-gray-700 bg-[#1a202c] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] focus:border-transparent text-gray-200 placeholder-gray-500 text-lg"
              />

              <button className="absolute right-3 px-8 py-3 bg-[#38b2ac] hover:bg-[#4fd1c5] text-[#0d1117] font-semibold rounded-full transition-colors duration-200 text-lg">
                Curar
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-base text-gray-400">
            <span className="font-semibold text-gray-300 tracking-wider">
              TENDENCIAS:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="hover:text-white cursor-pointer transition-colors">
                Ficción Clásica
              </span>
              <span className="text-gray-600">•</span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Revolución Tech
              </span>
              <span className="text-gray-600">•</span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Minimalismo
              </span>
            </div>
          </div>
        </div>
      </section>


      <section>
        <Descados/>
      </section>
    </>
  );
}
