import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import Wrapper from "../Wrapper";
import { Parallax } from "react-scroll-parallax";

const Service = ({ title, services }) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{title}</h3>
      </div>
      <ul className="service_list">
        {services.map((service) => (
          <li>
            <BiCheck className="service__list-icon" />
            <p>{service}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

const list1 = [
  "Brochure Websites",
  "Ecommerce Websites",
  "WordPress Websites",
  "Responsive Websites",
];

const list2 = [
  "Website Discovery Session",
  "Marketplace Research",
  "Competitor Research/Analysis",
  "Website Wireframes",
];

const Services = () => {
  return (
    <Parallax speed={-5}>
      <Wrapper id="services" header1="What I Offer" header2="Services">
        <Service services={list1} title="UI/UX Design" />

        <Service services={list2} title="Web Development" />
      </Wrapper>
    </Parallax>
  );
};

export default Services;
