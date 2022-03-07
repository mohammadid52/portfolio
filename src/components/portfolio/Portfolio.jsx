import React from "react";
import "./portfolio.css";
import Wrapper from "../Wrapper";
import { projects } from "../../constants";

const Portfolio = () => {
  return (
    <Wrapper id="portfolio" header1="My Recent Work" header2="Portfolio">
      {projects.map((project) => (
        <article key={project.id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={project.img} alt="" />
          </div>
          <h3>{project.name}</h3>
          <div className="portfolio__item-cta">
            <a
              href={project.github}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={project.url}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      ))}
    </Wrapper>
  );
};

export default Portfolio;
