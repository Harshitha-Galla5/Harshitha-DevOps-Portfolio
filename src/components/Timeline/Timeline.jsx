import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech AI & ML",
    description:
      "Began Computer Science Engineering (AI & ML) journey and built programming fundamentals."
  },

  {
    year: "2024",
    title: "Linux & Cloud Foundations",
    description:
      "Started learning Linux administration, networking concepts and AWS cloud fundamentals."
  },

  {
    year: "2025",
    title: "AWS DevOps Internship",
    description:
      "Completed AWS DevOps Internship training through APSSDC and gained hands-on exposure to AWS, Docker, Linux and CI/CD workflows."
  },

  {
    year: "2025",
    title: "Infrastructure as Code",
    description:
      "Learned Terraform and automated AWS infrastructure provisioning using Infrastructure as Code practices."
  },

  {
    year: "2026",
    title: "Containerization & Kubernetes",
    description:
      "Built Docker projects and deployed applications on Kubernetes using Deployments, Services, PVCs and Ingress."
  },

  {
    year: "2026",
    title: "DevOps Project Portfolio",
    description:
      "Built CI/CD pipelines, Kubernetes deployments, infrastructure automation projects and AegisOps AI."
  }
];

function Timeline() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Learning Journey
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Growth from cloud fundamentals to DevOps engineering.
        </p>

        <div className="relative">

          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                mb-12 flex items-center
                ${index % 2 === 0 ? "justify-start" : "justify-end"}
              `}
            >

              <div
                className="
                w-[45%]
                bg-slate-900/60
                border
                border-slate-700
                rounded-xl
                p-5
                "
              >

                <p className="text-blue-400 font-bold">
                  {item.year}
                </p>

                <h3 className="text-xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Timeline;
