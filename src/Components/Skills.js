import React from "react";

export default function Skills() {
  const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MySQL"];

  return (
    <div>
      <h2>Skills</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ margin: "6px 0" }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
