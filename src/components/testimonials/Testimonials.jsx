import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/1.jpg";
import AVATAR2 from "../../assets/2.jpg";
import AVATAR3 from "../../assets/3.jpg";
import AVATAR4 from "../../assets/4.jpg";
import AVATAR5 from "../../assets/5.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adip is simply dummy,Lorem ipsum dolor sit amet, consectetur adip is simply dummy",
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adip is simply dummy,Lorem ipsum dolor sit amet, consectetur adip is simply dummy",
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adip is simply dummy,Lorem ipsum dolor sit amet, consectetur adip is simply dummy",
  },
  {
    id: 4,
    avatar: AVATAR4,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adip is simply dummy,Lorem ipsum dolor sit amet, consectetur adip is simply dummy",
  },
  {
    id: 5,
    avatar: AVATAR5,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adip is simply dummy,Lorem ipsum dolor sit amet, consectetur adip is simply dummy",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review, id }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Avatar one" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
