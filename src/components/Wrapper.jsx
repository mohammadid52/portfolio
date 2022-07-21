import React from "react";
import { Parallax } from "react-scroll-parallax";

const Wrapper = ({ id, header1, header2, children }) => {
  return (
    <section id={id}>
      <h5>{header1}</h5>
      <h2>{header2}</h2>
      <Parallax speed={5}>
        <div className={`container ${id}__container`}>{children}</div>
      </Parallax>
    </section>
  );
};

export default Wrapper;
