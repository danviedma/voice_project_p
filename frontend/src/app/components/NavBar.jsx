export default function NavBar() {
  return (
    <nav className="p-4">
        <ul className="flex justify-center text-custom-dark text-sm">
            <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/">INICIO</a>
            </li>
            <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/nosotros">ACERCA DE MI</a>
            </li>
            <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/servicios">MI TRABAJO</a>
            </li>
            <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/contacto">MATERIAL</a>
            </li>
            <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/contacto">CURSOS Y TALLERES</a>
            </li>
            <li className="mr-6 hover:border-b hover:border-gray-800 hover:text-gray-600 transition duration-300">
            <a href="/contacto">CONTACTO</a>
            </li>
        </ul>
  
    </nav>
  );
}