import { IoSearchSharp } from "react-icons/io5";

export function Menu() {
  return (
    // Fondo oscuro con el difuminado sutil de la imagen
    <section className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Efecto de difuminado de fondo (opcional, para mayor fidelidad) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.15),transparent_70%)]"></div>

      <div className="max-w-3xl w-full text-center z-10">
        {/* Título principal con colores de la imagen */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
            Busca tu
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            próxima <span className="text-[#4fd1c5]">aventura</span>
          </h1>
        </div>

        {/* Barra de búsqueda oscura */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center">
            <span className="absolute left-6 text-gray-500">
              <IoSearchSharp className="w-6 h-6" />
            </span>
            <input
              type="text"
              placeholder="Títulos, autores o géneros..."
              // Fondo oscuro grisáceo, bordes sutiles
              className="w-full pl-16 pr-36 py-5 rounded-full border border-gray-700 bg-[#1a202c] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] focus:border-transparent text-gray-200 placeholder-gray-500 text-lg"
            />
            {/* Botón color cian/turquesa de la imagen */}
            <button className="absolute right-3 px-8 py-3 bg-[#38b2ac] hover:bg-[#4fd1c5] text-[#0d1117] font-semibold rounded-full transition-colors duration-200 text-lg">
              Curar
            </button>
          </div>
        </div>

        {/* Tendencias con estilo de la imagen (más minimalista, sin pastillas grises) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-base text-gray-400">
          <span className="font-semibold text-gray-300 tracking-wider">TENDENCIAS:</span>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="hover:text-white cursor-pointer transition-colors">Ficción Clásica</span>
            <span className="text-gray-600">•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Revolución Tech</span>
            <span className="text-gray-600">•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Minimalismo</span>
          </div>
        </div>
      </div>
    </section>
  );
}