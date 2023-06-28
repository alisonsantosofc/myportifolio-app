import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { testimonialsData } from "./testimonialsData";

import { StyledTestimonials } from "./styles";

export function Testimonials() {
  return (
    <StyledTestimonials className="container section" id="testimonials">
      <h2 className="section-title">Depoimentos</h2>
      <span className="section-subtitle">Meus clientes e amigos dizem</span>

      <div className="testimonial-container">
        {testimonialsData.map(({id, image, title, description}) => (
          <div className="testimonial-card" key={id}>
            <img src={image} alt="user avatar" />

            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </StyledTestimonials>
  )
}
