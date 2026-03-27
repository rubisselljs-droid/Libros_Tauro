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
    <div>
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
  );
}
