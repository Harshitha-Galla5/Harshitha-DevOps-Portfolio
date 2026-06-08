import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
return ( <section id="contact" className="py-24">

  <div className="max-w-5xl mx-auto px-6">

    <div
      className="
      bg-slate-900/60
      border
      border-slate-700
      rounded-3xl
      p-10
      text-center
      backdrop-blur-md
      "
    >

      <h2 className="text-4xl font-bold mb-6">
        Let's Connect
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto mb-12">
        Open to DevOps, Cloud and Platform Engineering opportunities.
        Feel free to reach out for internships, collaborations,
        projects or technical discussions.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <a
          href="mailto:harshithagalladevops@gmail.com"
          className="
          flex
          flex-col
          items-center
          gap-3
          p-6
          rounded-2xl
          bg-slate-800
          border
          border-slate-700
          hover:border-blue-500
          transition
          "
        >
          <FaEnvelope size={28} />

          <h3 className="font-semibold">
            Email
          </h3>

          <p className="text-slate-400 text-sm break-all">
            harshithagalladevops@gmail.com
          </p>

        </a>

        <a
          href="https://www.linkedin.com/in/harshitha-galla-343bab345"
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          flex-col
          items-center
          gap-3
          p-6
          rounded-2xl
          bg-slate-800
          border
          border-slate-700
          hover:border-blue-500
          transition
          "
        >
          <FaLinkedin size={28} />

          <h3 className="font-semibold">
            LinkedIn
          </h3>

          <p className="text-slate-400 text-sm">
            View Profile
          </p>

        </a>

        <a
          href="https://github.com/Harshitha-Galla5"
          target="_blank"
          rel="noopener noreferrer"
          className="
          flex
          flex-col
          items-center
          gap-3
          p-6
          rounded-2xl
          bg-slate-800
          border
          border-slate-700
          hover:border-blue-500
          transition
          "
        >
          <FaGithub size={28} />

          <h3 className="font-semibold">
            GitHub
          </h3>

          <p className="text-slate-400 text-sm">
            View Repositories
          </p>

        </a>

      </div>

    </div>

  </div>

</section>


);
}

export default Contact;
