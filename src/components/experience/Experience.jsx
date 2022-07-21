import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import Wrapper from "../Wrapper";
import { skills } from "../../constants";
import { Parallax } from "react-scroll-parallax";
const Experience = () => {
  return (
    <Wrapper
      id="experience"
      header1="What Skills I Have"
      header2="My Experience"
    >
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          {skills.frontend.map((skill) => (
            <article key={skill.id} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{skill.name}</h4>
                <small className="text-light">{skill.level}</small>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          {skills.backend.map((skill) => (
            <article key={skill.id} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>{skill.name}</h4>
                <small className="text-light">{skill.level}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Experience;
