import { MdOutlineMenuBook } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";
export default function Genero({ imagen, icono, genero }) {
  const IconoTomado = () => {
    switch (icono) {
      case "Ficcion":
        return (
          <i>
            <MdOutlineMenuBook />
          </i>
        );

      case "ciencia":
        return (
          <i>
            <GiMaterialsScience />
          </i>
        );

      case "Historia":
        return (
          <i>
            <MdHistoryEdu />
          </i>
        );
    }
  };

  return (
    <div className="relative w-64 h-80 rounded-4xl overflow-hidden group cursor-pointer shadow-2xl">
      <div className="absolute inset-0">
        <img
          src={imagen}
          alt={genero}
          className="w-full h-full object-cover blur-[2px] scale-110 brightness-[0.85]"
        />

        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative h-full flex flex-col justify-end p-8 z-10">
        <div className="mb-4">
          <span className="text-[#4fd1c5] text-4xl inline-block">
            {IconoTomado()}
          </span>
        </div>

        <h2 className="text-white text-3xl font-bold tracking-tight">
          {genero}
        </h2>
      </div>
    </div>
  );
}
