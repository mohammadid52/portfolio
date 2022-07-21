import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const xyVariants = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 70,
      transition: { delay, duration: 1, ease: "linear" },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 1, ease: "linear" },
    },
  };
};

export const scaleVariants = (delay = 0, duration = 1) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.7,
      transition: { delay, duration },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delay, duration },
    },
  };
};

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Parallax speed={5}>
          <motion.h5 initial="hidden" animate="show" variants={xyVariants(0.3)}>
            Hello I'm
          </motion.h5>
          <motion.h1 initial="hidden" animate="show" variants={xyVariants(0.6)}>
            Mohammad Dehgamwala
          </motion.h1>
          <motion.h5
            initial="hidden"
            animate="show"
            variants={xyVariants(0.8)}
            className="text-light"
          >
            Fullstack Developer
          </motion.h5>
          <CTA />
        </Parallax>

        <HeaderSocials />
        <Parallax speed={10}>
          <motion.div
            className="me"
            initial="hidden"
            animate="show"
            variants={xyVariants(1.2)}
          >
            <img src={ME} alt="me" />
          </motion.div>
        </Parallax>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
