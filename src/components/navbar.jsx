import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from '../assets/icon/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
useEffect

const people = [
  { name: 'Início', href: '/', current: true },
  { name: 'Sobre', href: '/sobre', current: false },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="fade-right" data-aos-duration="3000" className="container relative mx-auto px-3 flex justify-between items-center">
      <img src={icon} alt="Icone da página" className="w-16" />
      <nav className={isOpen ? "flex" : "hidden md:flex"}>
        <ul className="flex absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex">
          {people.map((person, index) => (
            <li key={index} className="px-3 py-2 transition delay-75 cursor-pointer rounded text-zinc-400 bg-zinc-950 hover:bg-zinc-100 hover:text-black">
              <Link to={person.href} className={person.current ? "font-bold text-purple-500" : ""}>{person.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden">
        <button className="flex justify-center items-center text-white" onClick={toggleNavbar}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "hidden" : "flex"}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "flex" : "hidden bg-black"}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
