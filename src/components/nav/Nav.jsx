/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./nav.css";
import { AiOutlineBook, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";

const variants = {
  hidden: {
    opacity: 0,

    transition: { delay: 1, duration: 1 },
  },
  show: {
    opacity: 1,

    transition: { delay: 1, duration: 1 },
  },
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const isActive = (nav) => {
    if (nav === activeNav) return "active";
    return "";
  };

  return (
    <motion.nav initial="hidden" animate="show" variants={variants}>
      <a
        title={"Home"}
        onClick={() => setActiveNav("#")}
        className={isActive("#")}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        title={"About"}
        onClick={() => setActiveNav("#about")}
        className={isActive("#about")}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveNav("#experience")}
        className={isActive("#experience")}
        title={"Experience"}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveNav("#services")}
        className={isActive("#services")}
        title={"Services"}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActiveNav("#portfolio")}
        title={"Portfolio"}
        className={isActive("#portfolio")}
        href="#portfolio"
      >
        <AiOutlineBook />
      </a>
      <a
        onClick={() => setActiveNav("#testimonials")}
        className={isActive("#testimonials")}
        title={"Testimonials"}
        href="#testimonials"
      >
        <VscPreview />
      </a>
      <a
        onClick={() => setActiveNav("#contact")}
        className={isActive("#contact")}
        title={"Contact"}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </motion.nav>
  );
};

export default Nav;
