import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: "Administrative Services",
    description: "A React-based weather application using an external API for real-time weather data.",
    image: "/assets/images/Calendar.png", // Replace with actual image file name in public folder
  },
  {
    title: "Web Development",
    description: "A blog built with React, featuring responsive design and dynamic components.",
    image: "/assets/images/Hero2.png", // Replace with actual image file name in public folder
  },
  {
    title: "Social Media Management",
    description: "A professional website for showcasing virtual assistant services, built with HTML, CSS, and JavaScript.",
    image: "/assets/images/S.webp", // Replace with actual image file name in public folder
  },
  {
    title: "Content Creation",
    description: "A personal portfolio showcasing projects and skills, designed with a mobile-first approach.",
    image: "/assets/images/ugc.png", // Replace with actual image file name in public folder
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">PORTFOLIO</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3 className="portfolio-project-title">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
