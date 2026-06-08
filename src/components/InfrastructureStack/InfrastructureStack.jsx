import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";

import {
SiDocker,
SiKubernetes,
SiTerraform,
SiJenkins,
SiPrometheus,
SiGrafana,
SiGithubactions,
SiAnsible
} from "react-icons/si";

const layers = [
{
title: "Cloud Engineering",
description:
"Cloud infrastructure, networking and security services.",
skills: [
{ name: "AWS", icon: <FaAws /> },
{ name: "EC2" },
{ name: "S3" },
{ name: "IAM" },
{ name: "VPC" }
]
},

{
title: "Containerization",
description:
"Application packaging, deployment and orchestration.",
skills: [
{ name: "Docker", icon: <SiDocker /> },
{ name: "Kubernetes", icon: <SiKubernetes /> },
{ name: "Ingress" }
]
},

{
title: "Automation & CI/CD",
description:
"Infrastructure automation and deployment pipelines.",
skills: [
{ name: "Terraform", icon: <SiTerraform /> },
{ name: "Jenkins", icon: <SiJenkins /> },
{ name: "GitHub Actions", icon: <SiGithubactions /> },
{ name: "Ansible", icon: <SiAnsible /> }
]
},

{
title: "Observability",
description:
"Monitoring, metrics, alerting and dashboards.",
skills: [
{ name: "Prometheus", icon: <SiPrometheus /> },
{ name: "Grafana", icon: <SiGrafana /> },
{ name: "Monitoring" }
]
}
];

function InfrastructureStack() {
return ( <section id="skills" className="py-24">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      Core DevOps Competencies
    </h2>

    <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto">
      Technologies and practices used across cloud infrastructure,
      automation, container orchestration and observability.
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      {layers.map((layer, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.03
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

          <h3 className="text-2xl font-bold text-blue-400 mb-3">
            {layer.title}
          </h3>

          <p className="text-slate-400 mb-6">
            {layer.description}
          </p>

          <div className="flex flex-wrap gap-3">

            {layer.skills.map((skill) => (

              <span
                key={skill.name}
                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-slate-800
                border
                border-slate-600
                hover:border-blue-500
                transition
                "
              >
                {skill.icon}
                {skill.name}
              </span>

            ))}

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

);
}

export default InfrastructureStack;

