import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import BootLoader from "./components/BootLoader/BootLoader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Architecture from "./components/Architecture/Architecture";
import ActivityConsole from "./components/ActivityConsole/ActivityConsole";
import InfrastructureStack from "./components/InfrastructureStack/InfrastructureStack";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  const [loading,setLoading] = useState(true);

  if(loading){
    return (
      <BootLoader
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <>
      <Navbar/>
      <Hero/>
      <Dashboard />
      <Architecture />
      <ActivityConsole />
      <InfrastructureStack />
      <Projects />
      <Timeline />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
