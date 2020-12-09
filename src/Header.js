import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { hash } = useLocation();

  function setActive(href) {
    const isActive = href === hash;
    return isActive;
  }

  const menuList = [
    {
      href: '#home',
      title: 'Home',
    },
    {
      href: '#about',
      title: 'About',
    },
    {
      href: '#skills',
      title: 'Skills',
    },
    {
      href: '#work',
      title: 'Work',
    },
    {
      href: '#contact',
      title: 'Contact',
    },
  ];

  return (
    <header className="header-1">
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav__logo">
            Mohammad
          </a>
        </div>
        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list">
            {menuList.map(({ href, title }) => (
              <li className="nav__item">
                <a href={href} className={`nav__link ${setActive(href) ? 'active' : ''}`}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <AiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
