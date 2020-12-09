import React from 'react';
import myPhoto from './assets/img/myphoto.jpg';

const About = () => (
  <section className="section about" id="about">
    <h2 className="section-title">About</h2>
    <div className="about__container bd-grid">
      <div className="about__img">
        <img src={myPhoto} alt="about" />
      </div>
      <div>
        <h2 className="about__subtitle">I&apos;am Mohammad</h2>
        <p className="about__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit placeat
          vitae dignissimos ad tenetur consectetur labore? Eos, pariatur quod?
        </p>
      </div>
    </div>
  </section>
);

export default About;
