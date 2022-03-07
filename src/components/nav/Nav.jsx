/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const isActive = (nav) => {
    if (nav === activeNav) return "active";
    return "";
  };

  return (
    <nav>
      <a onClick={() => setActiveNav("#")} className={isActive("#")} href="#">
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveNav("#about")}
        className={isActive("#about")}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveNav("#experience")}
        className={isActive("#experience")}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveNav("#services")}
        className={isActive("#services")}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActiveNav("#contact")}
        className={isActive("#contact")}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
