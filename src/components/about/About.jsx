import React from "react";
import { about } from "../../constants";
import Wrapper from "../Wrapper";
import "./about.css";

const About = () => {
  return (
    <Wrapper id="about" header1="Get To Know" header2="About Me">
      <div className="about__me">
        <div className="about__me-image">
          <img src={about.photo} alt="Mohammad Dehgamwala" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          {/* Experience */}

          {about.cards.map((card) => (
            <article key={card.id} className="about__card">
              <card.Icon className="about__icon" />
              <h5>{card.name}</h5>
              <small>{card.value}</small>
            </article>
          ))}
        </div>

        <p>{about.about_me}</p>
        <a href="#contact" className="btn btn-primary">
          Let's talk
        </a>
      </div>
    </Wrapper>
  );
};

export default About;
