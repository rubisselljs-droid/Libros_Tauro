import { useParams } from "react-router-dom";

export default function Categoria() {
  const { nombre } = useParams();

  // LIBROS REALES CON PDFs Y PORTADAS
  const libros = {
    "ficcion-clasica": [
      {
        titulo: "Alicia en el País de las Maravillas",
        autor: "Lewis Carroll",
        imagen: "/libros/Portadas/Alicia.jpeg",
        pdf: "/libros/alicia-en-el-pais-de-las-maravillas-lewis-carroll.pdf",
      },
      {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        imagen: "/libros/Portadas/Don_Quijote.jpg",
        pdf: "/libros/don-quijote-de-la-mancha-miguel-de-cervantes.pdf",
      },
      {
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        imagen: "/libros/Portadas/el_gran_gastby.jpg",
        pdf: "/libros/el-gran-gatsby-f-scott-fitzgerald.pdf",
      },
      {
        titulo: "Romeo y Julieta",
        autor: "William Shakespeare",
        imagen: "/libros/Portadas/Romeo_Julieta.jpg",
        pdf: "/libros/romeo-y-julieta-william-shakespeare.pdf",
      },
    ],
  };

  const categoriaActual = libros[nombre] || [];

  return (
    <div className="p-10 text-white bg-[#0d1117] min-h-screen">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {nombre.replace("-", " ")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {categoriaActual.map((libro, index) => (
          <a
            key={index}
            href={libro.pdf}
            target="_blank"
            className="group block w-full max-w-xs mx-auto rounded-2xl overflow-hidden bg-[#111827] border border-slate-800 hover:border-[#4fd1c5] transition shadow-lg"
          >
            <img
              src={libro.imagen}
              alt={libro.titulo}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{libro.titulo}</h2>
              <p className="text-slate-400">{libro.autor}</p>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
}