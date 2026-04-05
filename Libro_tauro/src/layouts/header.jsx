import { PiBookOpenTextDuotone } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: 'Catálogo', path: '/catalogo' },
  { label: 'Blog', path: '/blog' },
  { label: 'Foro', path: '/foro' },
  { label: 'Contacto', path: '/contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#111111] px-4 md:px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-[#008080] font-bold text-xl md:text-3xl lg:text-4xl inline-block">
            Libros Tauro
          </Link>
        </div>

        <button
          className="md:hidden text-white hover:text-[#008080] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white hover:text-[#008080] hover:underline transition-all duration-300 font-medium text-sm lg:text-base ${isActive ? 'text-[#4fd1c5] underline' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="ml-2 lg:ml-4">
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

      {menuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
          <ul className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white hover:text-[#008080] transition-all duration-300 font-medium block ${isActive ? 'text-[#4fd1c5]' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="flex gap-4 pt-2 border-t border-gray-700">
              <button className="text-white hover:text-[#008080] transition-colors duration-300">
                <PiBookOpenTextDuotone className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#008080] transition-colors duration-300">
                <SlUser className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
