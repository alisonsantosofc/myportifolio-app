import { styled } from "styled-components";

import avatarImg from "../../assets/avatar.jpg";

export const StyledHome = styled.section`
  .home-container {
    row-gap: 7rem;
  }

  .home-content {
    display: flex;
    justify-content: space-between;
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;

    .info-container {
      h1 {
        font-size: ${({theme}) => theme.text.size.big};
        margin-bottom: .25rem;

        svg {
          font-size: 2.5rem;
          margin-left: .5rem;
          color: ${({theme}) => theme.colors.main};
        }
      }

      h3 {
        position: relative;
        font-size: ${({theme}) => theme.text.size.header};
        padding-left: 5.4rem;
        font-weight: ${({theme}) => theme.text.weight.normal};
        margin-bottom: 1rem;

        &::before {
          content: '';
          position: absolute;
          top: 1.1rem;
          left: 0;
          width: 70px;
          height: 1px;
          background-color: ${({theme}) => theme.colors.text};
        }
      }

      p {
        max-width: 400px;
        margin-bottom: 3rem;
      }

      button {
        background: ${({theme}) => theme.colors.main};

        &:hover {
          background: ${({theme}) => theme.effects.hoverLight(theme.colors.main)};
        }
      }
    }

    .avatar-container {
      display: flex;
      height: 100%;

      .home-img {
        background-image: url(${avatarImg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
        justify-self: center;
        border-radius: 100%;
        box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
        animation: avatar__animate 8s ease-in-out infinite 1s;
      }

      .social-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-left: 4rem;

        .social-icon {
          font-size: 1.8rem;
          color: ${({theme}) => theme.colors.main};
          transition: .3s;

          &:hover {
            color: ${({theme}) => theme.effects.hoverLight(theme.colors.main)};
          }
        }
      }
    }

    @keyframes avatar__animate {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }

      50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      }

      100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }
  }

  .scrolldown-container {
    .scrolldown-button {
      display: flex;
      align-items: center;

      .mouse-simple {
        font-size: 2.5rem;
        margin-bottom: 0.3rem;
        animation: scroll 2s ease infinite;
      }

      span {
        color: ${({theme}) => theme.colors.title};
        font-weight: ${({theme}) => theme.text.weight.middle};
        margin-right: .25rem;
        margin-left: .5rem;
      }

      .arrow-down {
        font-size: 1.25rem;
      }
    }

    @keyframes scroll {
      0% {
        transform: translateY(0);
      }

      30% {
        transform: translateY(0.5rem);
      }
    }
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .home-content {
      grid-template-columns: repeat(2, 1fr) 100px;
      column-gap: 1.25rem;

      .info-container {
        h1 {
          font-size: ${({theme}) => theme.text.size.title};
          
          svg {
            font-size: 2rem;
          }
        }

        h3 {
          font-size: ${({theme}) => theme.text.size.medium};
          padding-left: 3.75rem;
          margin-bottom: 0.5rem;

          &::before {
            width: 42px;
            top: 0.8rem;
          }
        }

        p {
          max-width: initial;
          margin-bottom: 2.5rem;
        }
      }

      .avatar-container {
        .home-img {
          width: 250px;
          height: 250px;
          box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
        }
      }
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .home-content {
      display: flex;
      padding-top: 1rem;
      flex-direction: column-reverse;

      .info-container {
        grid-column: 1/3;
      }

      .avatar-container {
        .home-img {
          justify-self: initial;
          width: 200px;
          height: 200px;
          box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
        }

        .social-container {
          display: flex;
          flex-direction: column;
          order: 1;
          gap: 2rem;

          .social-icon {
            font-size: 1.8rem;
            color: ${({theme}) => theme.colors.main};
            transition: .3s;

            &:hover {
              color: ${({theme}) => theme.effects.hoverLight(theme.colors.main)};
            }
          }
        }
      }
    }

    .scrolldown-container {
      display: none;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .home-content {
      grid-template-columns: 0.5fr 3fr;
      padding-top: 3.5rem;

      .avatar-container {
        .home-img {
          width: 180px;
          height: 180px;
        }
      }

      .info-container {
        h1 {
          font-size: ${({theme}) => theme.text.size.title};

          svg {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`;