import { motion } from "framer-motion";

const flow = [
  "Source Control",
  "CI/CD",
  "Containerization",
  "Infrastructure as Code",
  "Orchestration",
  "Monitoring",
  "Automation",
  "Optimization"
];

function Architecture() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Modern DevOps Workflow
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Core practices and technologies used across the software delivery lifecycle.
        </p>

        <div className="flex flex-col items-center">

          {flow.map((item, index) => (

            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-center"
            >

              <div
                className="
                w-72
                rounded-2xl
                p-5
                text-center
                bg-slate-900/60
                border
                border-slate-700
                hover:border-blue-500
                backdrop-blur-md
                transition
                "
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>

              {index !== flow.length - 1 && (
                <div className="h-12 flex items-center">
                  <span className="text-blue-500 text-3xl">
                    ↓
                  </span>
                </div>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Architecture;
