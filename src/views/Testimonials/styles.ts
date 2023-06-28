import { styled } from "styled-components";

export const StyledTestimonials = styled.section`
  .testimonial-container {
    width: 800px;
    padding: 0.5rem;
    padding-bottom: 3rem;
  }

  .testimonial-card {
    background-color: ${({theme}) => theme.colors.containerBg};
    box-shadow: ${({theme}) => theme.effects.shadowAround};
    padding: 1.5rem 2rem;
    margin-bottom: 3rem;
    border-radius: 1.5rem;
    height: 256px;
    max-width: calc(100% - 3rem);

    svg {
      width: 100px;
      height: 100px;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 1rem;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.9rem;
    }

    .btn-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;

      button {
        background-color: ${({theme}) => theme.colors.main500};

        &:hover {
          background-color: ${({theme}) => theme.effects.hoverLight(theme.colors.main500)};
        }
      }
    }
  }

  /* Swiper class */
  .swiper-pagination-bullet {
    background-color: ${({theme}) => theme.colors.text} !important;  
  }

  .swiper-pagination-bullet-active {
    background-color: ${({theme}) => theme.colors.main300} !important;  
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .testimonial-container {
      width: initial;
    }

    .testimonial-card {
      padding: 1.25rem 1.5rem;
    }
  }
`;