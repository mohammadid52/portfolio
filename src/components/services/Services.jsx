import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import Wrapper from "../Wrapper";

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
    <Wrapper id="services" header1="What I Offer" header2="Services">
      <Service title="UI/UX Design" />
      <Service title="Web Development" />
    </Wrapper>
  );
};

export default Services;
