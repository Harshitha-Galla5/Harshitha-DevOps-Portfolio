import { motion } from "framer-motion";

const logs = [
  "Last login: DevOps Engineer Console",
  "",

  "$ git push origin main",
  "✓ Code pushed successfully",
  "",

  "$ jenkins build hospital-app",
  "✓ Build #42 completed",
  "",

  "$ docker build -t hospital-app:v1.0 .",
  "✓ Docker image created",
  "",

  "$ docker push dockerhub/hospital-app:v1.0",
  "✓ Image pushed to registry",
  "",

  "$ kubectl apply -f deployment.yaml",
  "✓ Deployment updated",
  "",

  "$ kubectl rollout status deployment/hospital-app",
  "✓ Rollout successful",
  "",

  "$ kubectl get pods",
  "hospital-app-7c4f6d8c9d    Running",
  "mysql-6fb45dbf44           Running",
  "",

  "$ kubectl get svc",
  "hospital-service           NodePort",
  "mysql-service              ClusterIP",
  "",

  "$ terraform plan",
  "No changes. Infrastructure up-to-date.",
  "",

  "$ grafana dashboard status",
  "CPU Usage                  Healthy",
  "Memory Usage               Healthy",
  "Cluster Health             Healthy",
  "",

  "$ echo Deployment Successful",
  "Deployment Successful "
];

function ActivityConsole() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          DevOps Activity Console
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Simulated DevOps workflow covering CI/CD,
          containerization, Kubernetes deployment
          and monitoring.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          bg-black
          border
          border-green-500/30
          rounded-2xl
          overflow-hidden
          shadow-[0_0_40px_rgba(0,255,157,0.15)]
          "
        >

          <div className="flex justify-between items-center p-4 border-b border-slate-800">

            <div className="flex gap-2">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            <span className="text-slate-500 text-sm">
              harshitha@cloudops-terminal
            </span>

          </div>

          <div
            className="
            p-6
            font-mono
            text-green-400
            space-y-2
            max-h-[600px]
            overflow-y-auto
            "
          >

            {logs.map((log, index) => (

              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: index * 0.03
                }}
              >
                {log}
              </motion.p>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ActivityConsole;
