import { motion } from "framer-motion";
import React from "react";
import { CV } from "../../constants";
import { xyVariants } from "./Header";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        initial="hidden"
        animate="show"
        variants={xyVariants(1.5)}
        href={CV}
        download="Mohammad_Dehgamwala_CV"
        className="btn"
      >
        Download CV
      </motion.a>
      <motion.a
        initial="hidden"
        animate="show"
        variants={xyVariants(1.7)}
        href="#contact"
        className="btn btn-primary"
      >
        Let's talk
      </motion.a>
    </div>
  );
};

export default CTA;
