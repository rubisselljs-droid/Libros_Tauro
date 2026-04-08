import { useParams } from "react-router-dom";
import LibroD from "../components/LibroD";

const librosData = {
  "ficción clásica": [
    {
      titulo: "1984",
      autor: "George Orwell",
      imagen: "https://covers.openlibrary.org/b/id/15354149-L.jpg",
    },
    {
      titulo: "Orgullo y Prejuicio",
      autor: "Jane Austen",
      imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
    {
      titulo: "Matar a un ruiseñor",
      autor: "Harper Lee",
      imagen: "https://covers.openlibrary.org/b/id/9874662-L.jpg",
    },
  ],

  ciencia: [
    {
      titulo: "Una Breve Historia del Tiempo",
      autor: "Stephen Hawking",
      imagen: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    },
    {
      titulo: "El Gen Egoísta",
      autor: "Richard Dawkins",
      imagen: "https://covers.openlibrary.org/b/id/8235327-L.jpg",
    },
    {
      titulo: "Cosmos",
      autor: "Carl Sagan",
      imagen: "https://covers.openlibrary.org/b/id/8319251-L.jpg",
    },
  ],

  historia: [
    {
      titulo: "Sapiens",
      autor: "Yuval Noah Harari",
      imagen: "https://covers.openlibrary.org/b/id/10521211-L.jpg",
    },
    {
      titulo: "El Diario de Ana Frank",
      autor: "Ana Frank",
      imagen: "https://covers.openlibrary.org/b/id/8228694-L.jpg",
    },
    {
      titulo: "La Segunda Guerra Mundial",
      autor: "Antony Beevor",
      imagen: "https://covers.openlibrary.org/b/id/10932823-L.jpg",
    },
  ],
};

export default function GeneroPage() {
  const { genero } = useParams();
  const generoNormal = genero.replace("-", " ");

  const libros = librosData[generoNormal];

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 capitalize">{generoNormal}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {libros?.map((libro, idx) => (
          <LibroD
            key={idx}
            titulo={libro.titulo}
            autor={libro.autor}
            imagen={libro.imagen}
          />
        ))}
      </div>
    </div>
  );
}