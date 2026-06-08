import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
{
name: "AegisOps AI",
description:
"AI-powered DevOps platform focused on monitoring, alerting, automation and operational intelligence.",
status: "Building",
health: "Active Development",
github: "https://github.com/Harshitha-Galla5/AegisOps-AI.git",
stack: [
"Prometheus",
"Grafana",
"Alertmanager",
"n8n",
"Docker",
"Ollama"
]
},

{
name: "Secure Kubernetes CI/CD Platform",
description:
"End-to-end CI/CD platform using containerized workloads, Kubernetes deployments, secure ingress and GitHub Actions.",
status: "Running",
health: "Healthy",
github: "https://github.com/Harshitha-Galla5/Accuknox-devops-assignment.git",
stack: [
"Docker",
"Kubernetes",
"GitHub Actions",
"Ingress",
"TLS",
"KubeArmor"
]
},

{
name: "Java Login Application",
description:
"Automated build and deployment pipeline using Jenkins, Maven, SonarQube, Docker and Ansible.",
status: "Running",
health: "Healthy",
github: "https://github.com/Harshitha-Galla5/Java-Login-App.git",
stack: [
"Java",
"Maven",
"Jenkins",
"SonarQube",
"Docker",
"Ansible"
]
},

{
name: "Hospital Management Deployment",
description:
"Node.js and MySQL application containerized with Docker and deployed on Kubernetes using Deployments, Services, PVC and Ingress.",
status: "Running",
health: "Healthy",
github: "https://github.com/Harshitha-Galla5/Simple-hospital-app-deployment.git",
stack: [
"NodeJS",
"MySQL",
"Docker",
"Kubernetes",
"PVC",
"Ingress"
]
}
];

function Projects() {
return ( <section id="projects" className="py-24">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      Featured Projects
    </h2>

    <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto">
      Hands-on DevOps, Cloud and Infrastructure projects focused on
      automation, containerization, Kubernetes and CI/CD practices.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {projects.map((project, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.02
          }}
          className="
          bg-slate-900/60
          border
          border-slate-700
          rounded-2xl
          p-6
          hover:border-blue-500
          transition
          backdrop-blur-md
          "
        >

          <div className="flex justify-between items-center mb-4">

            <h3 className="text-xl font-bold">
              {project.name}
            </h3>

            <span
              className="
              px-3
              py-1
              rounded-full
              bg-green-500/20
              text-green-400
              text-sm
              "
            >
              {project.status}
            </span>

          </div>

          <p className="text-slate-400 mb-5">
            {project.description}
          </p>

          <p className="text-slate-400 mb-5">
            Health Status:
            <span className="text-blue-400 ml-2">
              {project.health}
            </span>
          </p>

          <div className="flex flex-wrap gap-2 mb-6">

            {project.stack.map((tech) => (

              <span
                key={tech}
                className="
                px-3
                py-1
                rounded-lg
                bg-slate-800
                border
                border-slate-700
                text-sm
                "
              >
                {tech}
              </span>

            ))}

          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            bg-blue-600
            rounded-lg
            hover:bg-blue-700
            transition
            "
          >
            <FaGithub />
            View Repository
          </a>

        </motion.div>

      ))}

    </div>

  </div>

</section>

);
}

export default Projects;

