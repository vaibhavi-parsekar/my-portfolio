import React from "react";



const projects = [
  {
    title: "Online Medicine Ordering System",
    desc: "A web app that allows users to order medicines online with features like cart, payment, and admin dashboard.",
    img: process.env.PUBLIC_URL + "/onlinemed.jpg", 
  },
  {
    title: "Expense Tracker",
    desc: "An app to manage daily income and expenses with interactive charts and real-time updates.",
    img: process.env.PUBLIC_URL + "/expense.jpg",
  },
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
