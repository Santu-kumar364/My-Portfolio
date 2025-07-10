import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
 
 

function App() {
  return (
    <div >
      <Navbar />
      <About/>
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
