import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call the function to set the initial state based on the window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`p-4 ${isScrolled ? 'fixed top-0 w-full bg-white z-10 py-8' : ''} transition-all duration-300`}>
      <div className={`flex justify-between items-center px-4 md:px-16 ${isScrolled ? 'flex-row h-full' : 'flex-col text-5xl'} transition-all duration-300`}>
        <div className={`${isScrolled ? 'text-xl' : 'text-5xl'} font-bodoni text-custom-dark transition-all duration-300`}>
          Pilar Araya J.
        </div>

        {/* Fonoaudióloga solo visible cuando no hay scroll y en pantallas grandes */}
        {!isScrolled && <div className="mb-4 text-3xl font-bodoni text-custom-dark hidden md:block">Fonoaudióloga</div>}

        {/* Botón del menú hamburguesa visible solo en móviles */}
        <button onClick={toggleMenu} className="inline-flex p-2 rounded md:hidden">
            <svg
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
            <svg
                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>

        {/* Enlaces del NavBar */}
        <ul className={`flex flex-col md:flex-row items-center text-sm text-custom-dark transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden md:flex'} ${isScrolled ? 'ml-20' : 'justify-center mt-3 md:mt-0'}`}>
        <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/">INICIO</a>
          </li>
          <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/about">ACERCA DE MI</a>
          </li>
          <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/myjob">MI TRABAJO</a>
          </li>
          <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/freecontent" target="_blank">MATERIAL</a>
          </li>
          <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/courses" target="_blank">CURSOS Y TALLERES</a>
          </li>
          <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/contact">CONTACTO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}