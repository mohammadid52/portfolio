import React from 'react';

const Contact = () => {
  return (
    <section class="contact section" id="contact">
      <h2 class="section-title">Contact</h2>
      <div class="contact__container bd-grid">
        <form action="" class="contact__form">
          <input type="text" placeholder="Name" class="contact__input" />
          <input type="email" placeholder="Email" class="contact__input" />
          <textarea class="contact__input" rows="10" cols="0" name="" id=""></textarea>

          <button class="contact__button button">Contact</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
