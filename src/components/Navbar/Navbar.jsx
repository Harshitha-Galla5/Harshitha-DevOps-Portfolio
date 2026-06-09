import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <nav
   className="
   fixed
   top-0
   w-full
   z-50
   backdrop-blur-xl
   bg-slate-950/80
   border-b
   border-slate-800
   "
 > <div
     className="
     max-w-7xl
     mx-auto
     px-6
     py-3
     flex
     justify-between
     items-center
     "
   > <h1
       className="
       text-lg
       md:text-xl
       font-bold
       text-blue-500
       "
     >
Harshitha@DevOps </h1>

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-xl"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

    <div
      className="
      hidden
      md:flex
      items-center
      gap-5
      text-sm
      "
    >
      <a href="#dashboard" className="hover:text-blue-400 transition">
        Dashboard
      </a>

      <a href="#skills" className="hover:text-blue-400 transition">
        Skills
      </a>

      <a href="#projects" className="hover:text-blue-400 transition">
        Projects
      </a>

      <a href="#contact" className="hover:text-blue-400 transition">
        Contact
      </a>

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="
        px-3
        py-1.5
        rounded-lg
        border
        border-slate-700
        hover:border-blue-500
        transition
        "
      >
        Resume
      </a>

      <a
        href="https://github.com/Harshitha-Galla5"
        target="_blank"
        rel="noopener noreferrer"
        className="
        flex
        items-center
        gap-2
        px-3
        py-1.5
        rounded-lg
        bg-blue-600
        hover:bg-blue-700
        transition
        "
      >
        <FaGithub />
        GitHub
      </a>
    </div>
  </div>

  {menuOpen && (
    <div
      className="
      md:hidden
      bg-slate-950
      border-t
      border-slate-800
      px-6
      py-4
      flex
      flex-col
      gap-4
      "
    >
      <a href="#dashboard" onClick={() => setMenuOpen(false)}>
        Dashboard
      </a>

      <a href="#skills" onClick={() => setMenuOpen(false)}>
        Skills
      </a>

      <a href="#projects" onClick={() => setMenuOpen(false)}>
        Projects
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>

      <a
        href="https://github.com/Harshitha-Galla5"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  )}
</nav>

);
}

export default Navbar;

