import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS DevOps Internship Training",
    issuer: "APSSDC",
    status: "Completed",
    year: "2025"
  },

  {
    title: "Python Programming Course",
    issuer: "GeeksforGeeks",
    status: "Completed",
    year: "2025"
  },

];

function Certifications() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Certifications & Goals
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Continuous learning roadmap and career objectives.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
              bg-slate-900/60
              border
              border-slate-700
              rounded-2xl
              p-6
              hover:border-blue-500
              transition
              "
            >

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <div className="mt-4">

                <span
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/20
                  text-blue-400
                  "
                >
                  {item.status}
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;
