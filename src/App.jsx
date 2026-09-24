import { Dashboard } from "@/sections/Dashboard";
import { About } from "@/sections/About";
import { Programs } from "@/sections/Programs";
import { Projects } from "@/sections/Projects";
import { Partners } from "@/sections/Partners";
import { Contact } from "@/sections/Contact";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
         <Navbar />
      <main>
        <Dashboard />
        <About />
        <Programs />
        <Projects />
        <Partners />
        <Contact />
      </main>
     { <Footer />}
    </div>
  );
}

export default App;
