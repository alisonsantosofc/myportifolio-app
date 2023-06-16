import { styled } from "styled-components";

export const StyledServices = styled.section`
  .services-container {
    grid-template-columns: repeat(3, 270px);
    justify-content: center;
    column-gap: 1.8rem;
  }

  .services-content {
    position: relative;
    box-shadow: ${({theme}) => theme.effects.shadowAround};
    background-color: ${({theme}) => theme.colors.containerBg};
    padding: 2rem 0 2rem 2.5rem;
  }

  .services-title {
    svg {
      font-size: 3.5rem;
      color: ${({theme}) => theme.colors.main500};
    }

    h3 {
      font-size: ${({theme}) => theme.text.size.medium};
      margin-bottom: 1rem;
    }
  }

  .services-button {
    color: ${({theme}) => theme.colors.title};
    font-size: ${({theme}) => theme.text.size.small};
    display: inline-flex;
    align-items: center;
    column-gap: 0.25rem;
    cursor: pointer;

    &:hover {
      svg {
        color: ${({theme}) => theme.colors.main500};
        transform: translateX(0.25rem);
      }
    }

    svg {
      font-size: 1rem;
      transition: .3s;
    }
  }

  .services-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme}) => theme.colors.fadeBg};
    z-index: var(--z-modal);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    opacity: 0;
    visibility: hidden;
    transition: .3s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  .services-modal-content {
    width: 520px;
    position: relative;
    background-color: ${({theme}) => theme.colors.containerBg};
    padding: 3.5rem 2.5rem 2.5rem;
    border-radius: 1.5rem;

    > svg {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.title};
      cursor: pointer;
      transition: .3s;

      &:hover {
        color: ${({theme}) => theme.effects.hoverLight(theme.colors.title)};
      }
    }

    > h3 {
      text-align: center;
      font-size: ${({theme}) => theme.text.size.medium};
      margin-bottom: 1rem;
    }

    > p {
      text-align: center;
      font-size: ${({theme}) => theme.text.size.small};
      padding: 0 2rem;
      margin-bottom: 2rem;
    }

    ul {
      row-gap: 0.75rem;

      li {
        display: flex;
        align-items: center;
        column-gap: .5rem;

        svg {
          color: ${({theme}) => theme.colors.main300};
          font-size: 1.5rem;
          min-width: 2rem;
          min-height: 2rem;
        }

        p {
          font-size: ${({theme}) => theme.text.size.small};
        }
      }
    }
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .services-container {
      grid-template-columns: repeat(2, 270px);
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .services-container {
      grid-template-columns: repeat(2, 1fr);
    }

    .services-content {
      padding: 2rem;
    }
  }

  @media screen and (max-width: 576px) {
    .services-container {
      grid-template-columns: 1fr;
      padding: 0 4rem;
    }
    .services-modal-content {
      padding: 3.5rem 1.5rem 2.5rem;

      > p {
        padding: 0;
      }
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;