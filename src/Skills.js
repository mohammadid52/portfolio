import React from 'react';
import image from './assets/img/GroovySittingDoodle.svg';

const Skills = () => {
  return (
    <section id="skills" class="section skills">
      <h2 class="section-title">Skills</h2>
      <div class="skills__container bd-grid">
        <div>
          <h2 class="skills__subtitle">Professional Skills</h2>
          <p class="skills__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, dolores.
          </p>

          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-html5 skills__icon"></i>
              <span class="skills__name">HTML5</span>
            </div>
            <div>
              <span class="skills__percentage">95%</span>
            </div>
            <div class="skills__bar skills__html"></div>
          </div>

          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-css3 skills__icon"></i>
              <span class="skills__name">CSS3</span>
            </div>
            <div>
              <span class="skills__percentage">85%</span>
            </div>
            <div class="skills__bar skills__css"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bx-paint-roll skills__icon"></i>
              <span class="skills__name">UX/UI</span>
            </div>
            <div>
              <span class="skills__percentage">70%</span>
            </div>
            <div class="skills__bar skills__ux"></div>
          </div>

          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-javascript skills__icon"></i>
              <span class="skills__name">JavaScipt/ES6</span>
            </div>
            <div>
              <span class="skills__percentage">68%</span>
            </div>
            <div class="skills__bar skills__js"></div>
          </div>

          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-react skills__icon"></i>
              <span class="skills__name">ReactJS</span>
            </div>
            <div>
              <span class="skills__percentage">70%</span>
            </div>
            <div class="skills__bar skills__react"></div>
          </div>

          <div class="skills__data">
            <div class="skills__names">
              <i class="bx bxl-nodejs skills__icon"></i>
              <span class="skills__name">NodeJS</span>
            </div>
            <div>
              <span class="skills__percentage">60%</span>
            </div>
            <div class="skills__bar skills__node"></div>
          </div>
        </div>
        <div class="work__img">
          <img src={image} alt="Work images" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
