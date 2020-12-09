import React from 'react';

const Work = () => {
  const workNames = [
    {
      title: 'Expager',
      subtitle: 'Track your income and expense with visual data',
      link: 'https://adoring-heyrovsky-15ffdd.netlify.app/',
    },
    {
      title: 'KeepItShort',
      subtitle: 'Be more productive by adding short notes',
      link: 'https://laughing-poitras-8586b3.netlify.app/',
    },
    {
      title: 'Cakes',
      subtitle: 'A static cake shop with cart for your events',
      link: 'https://elegant-shannon-a33fb2.netlify.app/',
    },
    {
      title: 'Socialize',
      subtitle: 'Post your creative thoughts and inspire others',
      link: 'https://mohammad-socialize.netlify.app/',
    },
    {
      title: 'Search Github Users',
      subtitle: 'Search and analyze github users with visual data',
      link: 'https://gifted-blackwell-a3dad8.netlify.app/',
    },
  ];
  return (
    <section className="section work" id="work">
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        {workNames.map(({ title, subtitle, link }) => (
          <div className="work__names">
            <div>
              <h6>{title}</h6>
              <p>{subtitle}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Click to open
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
