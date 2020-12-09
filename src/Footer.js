import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const iconList = [
    {
      href: 'https://www.instagram.com/majorsharp.id/',
      icon: <FaInstagram />,
    },
    {
      href: 'https://www.instagram.com/majorsharp.id/',
      icon: <FaFacebook />,
    },
    {
      href: 'https://www.instagram.com/majorsharp.id/',
      icon: <FaLinkedinIn />,
    },
  ];
  return (
    <footer className="footer">
      <p className="footer__title">Mohammad</p>
      <div className="footer__social">
        {iconList.map(({ href, icon }) => (
          <a href={href} className="footer__icon" rel="noreferrer" target="_blank">
            {icon}
          </a>
        ))}
      </div>
      <p>&#169; 2020 copyright all rights reserved</p>
    </footer>
  );
};

export default Footer;
