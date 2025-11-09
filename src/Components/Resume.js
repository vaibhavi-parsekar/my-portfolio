import React from "react";

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>Download my latest resume below 👇</p>
      <a
        href={`${process.env.PUBLIC_URL}/resume.pdf`} // Explicit path to public folder
        download
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        📄 Download Resume
      </a>
    </div>
  );
}





















// import React from "react";

// export default function Resume() {
//   return (
//     <div>
//       <h2>Resume</h2>
//       <p>Download my latest resume below 👇</p>
//       <a
//         href="resume.pdf"
//         download
//         style={{
//           backgroundColor: "#007bff",
//           color: "white",
//           padding: "10px 20px",
//           borderRadius: "6px",
//           textDecoration: "none",
//         }}
//       >
//         📄 Download Resume
//       </a>
//     </div>
//   );
// }
