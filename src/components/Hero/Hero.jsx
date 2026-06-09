import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 md:pt-20 relative overflow-hidden">
	<div
  	className="
  	absolute
  	top-20
  	left-1/2
  	-translate-x-1/2
  	w-[500px]
 	 h-[500px]
  	bg-blue-500/10
  	blur-[150px]
  	rounded-full
  	"
	/>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
          text-blue-400
          uppercase
          tracking-[6px]
          font-semibold
          mb-6
          "
        >
          DevOps Engineer • Cloud Enthusiast
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-6xl
          md:text-8xl
          font-bold
          "
        >
          Galla Harshitha
        </motion.h1>

        <div className="mt-8 h-20">

          <TypeAnimation
            sequence={[
              "Building Cloud Infrastructure",
              2000,
              "Automating CI/CD Pipelines",
              2000,
              "Managing Kubernetes Clusters",
              2000,
              "Engineering Reliability",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="
            text-2xl
            md:text-4xl
            text-blue-400
            font-semibold
            "
          />

	</div>

	  <div className="flex flex-wrap justify-center gap-3 mt-8">

  	    <span className="px-4 py-2 bg-slate-800 rounded-full">
    	    AWS
 	    </span>

  	    <span className="px-4 py-2 bg-slate-800 rounded-full">
    	    Docker
  	    </span>

  	    <span className="px-4 py-2 bg-slate-800 rounded-full">
    	    Kubernetes
  	    </span>

  	    <span className="px-4 py-2 bg-slate-800 rounded-full">
    	    Terraform
  	    </span>

  	    <span className="px-4 py-2 bg-slate-800 rounded-full">
    	    Jenkins
  	    </span>

	  </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
          max-w-3xl
          mx-auto
          mt-6
          text-xl
          text-slate-400
          leading-relaxed
          "
        >
          Passionate about AWS, Docker, Kubernetes,
          Terraform, Automation and Observability.
          Building scalable cloud infrastructure and
          reliable deployment systems.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">

  	<a
    	  href="#projects"
    	  className="
   	  px-8
   	  py-4
    	  rounded-xl
    	  bg-blue-600
    	  hover:bg-blue-700
    	  transition
    	  font-semibold
    	  inline-block
    	  "
  	 >
    	  View Projects
  	 </a>

  	<a
    	  href={`${import.meta.env.BASE_URL}resume.pdf`}
    	  download
    	  className="
    	  px-8
    	  py-4
    	  rounded-xl
     	  border
    	  border-slate-600
    	  hover:border-blue-500
    	  transition
    	  font-semibold
    	  inline-block
    	  "
  	 >
    	  Download Resume
  	 </a>

	</div>

      </div>

    </section>
  );
}

export default Hero;
