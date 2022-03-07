import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Service = ({ title }) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{title}</h3>
      </div>
      <ul className="service_list">
        <li>
          <BiCheck className="service__list-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adip is simply dummy</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adip is simply dummy</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adip is simply dummy</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adip is simply dummy</p>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <p>Lorem ipsum dolor sit amet, consectetur adip is simply dummy</p>
        </li>
      </ul>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <Service title="UI/UX Design" />
        <Service title="Web Development" />
      </div>
    </section>
  );
};

export default Services;
