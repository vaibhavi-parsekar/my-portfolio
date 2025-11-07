import React from "react";

const projects = [
  { title: "Portfolio Website", desc: "A personal portfolio built with React.", img: "./images/portfolio.jpg" },
  
  { title: "Weather App", desc: "Fetches weather data using OpenWeather API.", img: "/images/weather.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} loading="lazy" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


