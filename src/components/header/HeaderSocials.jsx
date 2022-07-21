import { motion } from "framer-motion";
import React from "react";
import { socialLinks } from "../../constants";
import { xyVariants } from "./Header";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {socialLinks.map((link, idx) => (
        <motion.a
          initial="hidden"
          animate="show"
          variants={xyVariants(idx * 0.5 + 0.5)}
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <link.Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default HeaderSocials;
