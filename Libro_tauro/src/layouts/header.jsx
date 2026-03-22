import { PiBookOpenTextDuotone } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
export default function Header() {
  return (
    <div className="bg-[#111111] px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
     
        <div>
          <h1 className="text-[#008080] font-bold text-2xl md:text-3xl lg:text-4xl">
            Libros Tauro
          </h1>
        </div>

        <nav>
          <ul className="flex items-center gap-6 md:gap-8">
            <li>
              <a
                href="#"
                className="text-white hover:text-[#008080] hover:underline transition-all duration-300 font-medium"
              >
                Catálogo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#008080] hover:underline transition-all duration-300 font-medium"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#008080] hover:underline transition-all duration-300 font-medium"
              >
                Foro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#008080] hover:underline transition-all duration-300 font-medium"
              >
                Contacto
              </a>
            </li>

           
            <li className="ml-4">
              <button className="text-white hover:text-[#008080] transition-colors duration-300">
                <PiBookOpenTextDuotone className="w-5 h-5" />
              </button>
            </li>
            <li>
              <button className="text-white hover:text-[#008080] transition-colors duration-300">
                <SlUser className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
