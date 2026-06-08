import { useEffect, useState } from "react";

const messages = [
  "Initializing CloudOps Platform...",
  "Connecting Kubernetes Cluster...",
  "Loading Observability Stack...",
  "Deployment Successful..."
];

function BootLoader({ onFinish }) {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    if(index < messages.length){

      const timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 700);

      return () => clearTimeout(timer);

    } else {

      setTimeout(() => {
        onFinish();
      }, 500);

    }

  }, [index]);

  return (

    <div className="h-screen bg-black flex items-center justify-center">

      <div className="text-green-400 font-mono text-xl">

        {messages.slice(0,index).map((msg,i)=>(
          <p key={i}>{msg}</p>
        ))}

      </div>

    </div>

  );
}

export default BootLoader;
