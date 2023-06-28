import { useRef } from "react";
import { User } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// @ts-ignore: Unreachable code error
import { Pagination } from "swiper";

import { testimonialsData } from "./testimonialsData";

import { StyledTestimonials } from "./styles";
import { Button } from "../../components/Button";

export function Testimonials() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <StyledTestimonials className="container section" id="testimonials">
      <h2 className="section-title">Depoimentos</h2>
      <span className="section-subtitle">Meus clientes e amigos dizem</span>

      <Swiper 
        className="testimonial-container"
        loop={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
      >
        {testimonialsData.map(({id, image, title, description}) => (
          <SwiperSlide className="testimonial-card" key={id}>
            <img src={image} alt="user avatar" />

            <h3>{title}</h3>
            <p>{description}</p>
          </SwiperSlide>
        ))}
        <SwiperSlide className="testimonial-card">
            <User />

            <h3>{'Deixe seu depoimento'}</h3>
            <p>{'Se você deseja deixar seu depoimento aqui entre em contato comigo.'}</p>

            <div className="btn-container">
              <Button size="small">Deixar depoimento</Button>
            </div>
        </SwiperSlide>
      </Swiper>
    </StyledTestimonials>
  )
}
