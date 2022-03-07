import React from "react";
import { CV } from "../../constants";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Mohammad_Dehgamwala_CV" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
