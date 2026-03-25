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
    <div>
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
  );
}
