import Genero from "../genero";

export default function Descados() {
  const LibroGenero = [
    {
      id: 1,
      imagen:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      genero: "Ficción Clásica",
      icono: "Ficcion",
    },
    {
      id: 2,
      imagen:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      genero: "Ficción Clásica",
      icono: "Ficcion",
    },
    {
      id: 3,
      imagen:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      genero: "Ficción Clásica",
      icono: "Ficcion",
    },
    {
      id: 4,
      imagen:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      genero: "Ficción Clásica",
      icono: "Ficcion",
    },
    {
      id: 5,
      imagen:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      genero: "Ficción Clásica",
      icono: "Ficcion",
    },
    {
      id: 6,
      imagen:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      genero: "Ficción Clásica",
      icono: "Ficcion",
    },
    {
      id: 7,
      imagen:
        "https://i.pinimg.com/1200x/4d/5e/f9/4d5ef94f9a038da39c34db143e5b98e0.jpg",
      genero: "Ficción Clásica",
      icono: "Ficcion",
    },
  ];
  return (
    <section className="w-full bg-[#0d1117] py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 text-center lg:text-left">
          Explora por Género
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center sm:place-items-start">
          {LibroGenero.map((emp) => {
            return (
              <Genero
                key={emp.id}
                imagen={emp.imagen}
                genero={emp.genero}
                icono={emp.icono}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
