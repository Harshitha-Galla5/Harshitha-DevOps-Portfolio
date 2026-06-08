import { motion } from "framer-motion";

const metrics = [
  {
    title: "Cloud",
    value: "AWS",
    description: "EC2 • S3 • IAM • VPC"
  },

  {
    title: "Containers",
    value: "Docker",
    description: "Images • Volumes • Networking"
  },

  {
    title: "Orchestration",
    value: "Kubernetes",
    description: "Pods • Deployments • Services"
  },

  {
    title: "Infrastructure",
    value: "Terraform",
    description: "IaC • State Management"
  },

  {
    title: "CI/CD",
    value: "Jenkins",
    description: "Build • Test • Deploy"
  },

  {
    title: "Monitoring",
    value: "Grafana",
    description: "Metrics • Alerts • Dashboards"
  }
];

function Dashboard() {
  return (
    <section id="dashboard" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center">
          DevOps Technology Stack 
        </h2>

	<p className="text-center text-slate-400 mb-12">
  	Technologies and domains I work with across cloud,
  	automation, containerization and observability.
	</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {metrics.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
              bg-slate-900/60
              backdrop-blur-md
              border
              border-slate-700
              rounded-2xl
              p-6
              hover:border-blue-500
              transition
              "
            >
              <h3 className="text-slate-400">
                {item.title}
              </h3>

              <p className="text-5xl font-bold text-blue-500 mt-4">
                {item.value}
              </p>

              <p className="text-slate-500 mt-4">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Dashboard;
