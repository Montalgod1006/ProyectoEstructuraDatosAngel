import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { MobileNavLink } from "./MobileNavLink";
import { NavLink } from "./NavLink";
import { useLocation } from "react-router";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log({ isMenuOpen });
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <nav className=" text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/*Inicio de Logo y Titulo */}
          <div className="flex items-center">
            <h1 className="font-bold text-xl">
                  AloViewer
            </h1>
          </div>
          {/* Fin Logo y Titulo */}
          {/*Inicio Navegación en escritorio */}
          <div className="hidden md:flex items-center space-x-4 ">
            <NavLink icon={<Home size={18} />} active = {isActive('/')} text="Inicio" to="/"  />
          </div>
          {/* Fin Navegación */}
          {/* Inicio Botón menu móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Fin Botón menu móvil */}
        </div>
      </div>
      {/* Inicio de Menu Movil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink
              icon={<Home size={18} />}
              active = {isActive('/')}
              text="Inicio"
              to="/"
            />
          </div>
        </div>
      )}
      {/* Fin de Menu Movil */}
    </nav>
  );
};
