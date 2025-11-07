import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="about" className="section"><About /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="resume" className="section"><Resume /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
