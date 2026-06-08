import { FaGithub } from "react-icons/fa";

function Navbar() {
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
     py-4
     flex
     flex-wrap
     justify-between
     items-center
     gap-4
     "
   >
    <h1
      className="
      text-xl
      md:text-2xl
      font-bold
      text-blue-500
      "
    >
      Harshitha DevOps
    </h1>

    <div
      className="
      flex
      flex-wrap
      items-center
      gap-6
      text-sm
      md:text-base
      "
    >

      <a
        href="#dashboard"
        className="hover:text-blue-400 transition"
      >
        Dashboard
      </a>

      <a
        href="#skills"
        className="hover:text-blue-400 transition"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="hover:text-blue-400 transition"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="hover:text-blue-400 transition"
      >
        Contact
      </a>

      <a
        href="/resume.pdf"
        download
        className="
        px-4
        py-2
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
        px-4
        py-2
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
</nav>

);
}

export default Navbar;

