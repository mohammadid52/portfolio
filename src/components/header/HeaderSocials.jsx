import React from "react";
import { socialLinks } from "../../constants";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {socialLinks.map((link) => (
        <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
          <link.Icon />
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
