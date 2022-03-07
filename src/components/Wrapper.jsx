import React from "react";

const Wrapper = ({ id, header1, header2, children }) => {
  return (
    <section id={id}>
      <h5>{header1}</h5>
      <h2>{header2}</h2>
      <div className={`container ${id}__container`}>{children}</div>
    </section>
  );
};

export default Wrapper;
