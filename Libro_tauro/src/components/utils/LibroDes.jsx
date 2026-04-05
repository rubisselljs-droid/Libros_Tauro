import LibroD from "../libroD";

export default function LibroDes() {
  const LibroDesc = [
    {
      id: 1,
      imagen: "image.png",
      titulo: "Fire & blood",
      autor: "george r.r martin",
    },

    {
      id: 2,
      imagen: "prin.jpg",
      titulo: "Fire & blood",
      autor: "george r.r martin",
    },
  ];

  return (
    <section className="w-full bg-[#0d1117] py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 text-center lg:text-left">
          Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center sm:place-items-start">
          {LibroDesc.map((emp) => {
            return (
              <LibroD
                key={emp.id}
                imagEen={emp.imagen}
                titulo={emp.titulo}
                autor={emp.autor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
