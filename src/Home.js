/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import image from './assets/img/SitReadingDoodle.svg';

const Home = () => {
  const iconList = [
    {
      href: 'https://github.com/mohammadid52',
      icon: <AiFillGithub />,
    },
    {
      href: 'https://www.instagram.com/majorsharp.id/',
      icon: <AiOutlineInstagram />,
    },
    {
      href: 'https://www.instagram.com/majorsharp.id/',
      icon: <FaLinkedinIn />,
    },
  ];
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi, <br />
          I'am <span className="home__title-color">Mohammad</span>
          <br />
          <span className="home__text-reveal" />
        </h1>
        <a href="#contact" className="button">
          Contact
        </a>
      </div>

      <div className="home__social">
        {iconList.map(({ href, icon }) => (
          <a href={href} target="_blank" rel="noreferrer" className="home__social-icon">
            {icon}
          </a>
        ))}
      </div>

      <div className="home__img">
        <img src={image} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
