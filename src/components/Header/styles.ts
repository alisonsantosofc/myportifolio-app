import { darken } from "polished";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: ${({theme}) => theme.colors.bodyBg};

  nav {
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
    
    .nav-logo {
      font-size: ${({theme}) => theme.text.size.medium};
      font-weight: ${({theme}) => theme.text.weight.middle};
    }

    .nav-menu {
      ul {
        display: flex;
        column-gap: 2rem;

        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: ${({theme}) => theme.text.size.small};
          color: ${({theme}) => theme.colors.text};
          font-weight: ${({theme}) => theme.text.weight.middle};
          transition: .3s; 

          &.active {
            font-weight: ${({theme}) => theme.text.weight.max};
            color: ${({theme}) => theme.colors.title};
          }

          &:hover {
            color: ${({theme}) => theme.colors.title};
          }

          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  .nav-toggle {
    svg {
      font-size: 2rem;
      color: ${({theme}) => theme.colors.text};
    }
  }
  
  .nav-link svg,
  .nav-close,
  .nav-toggle {
    display: none;
  }

  /*=== Breakpoints ===*/
  /* For medium devices */
  @media screen and (max-width: 768px) {
    top: initial;
    bottom: 0;

    nav {
      height: 3rem;

      .nav-logo {
        font-size: 1rem;
      }

      .nav-menu {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: ${({theme}) => theme.colors.bodyBg};
        padding: 2.5rem 0 4rem;
        box-shadow: ${({theme}) => theme.effects.shadowTop};
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;

        &.show {
          bottom: 0;
        }

        ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .nav-close {
          position: absolute;
          right: 1.8rem;
          bottom: 1rem;
          font-size: 1.5rem;
          cursor: pointer;
          color: ${({theme}) => theme.colors.title};

          &:hover {
            color: ${({theme}) => darken(0.1, theme.colors.title)};
          }
        }
      }
    }

    .nav-toggle {
      cursor: pointer;

      svg {
        font-size: 2rem;
      }
    }

    .nav-link svg,
    .nav-close,
    .nav-toggle {
      display: block;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    nav {
      .nav-menu {
        ul {
          column-gap: 0;
        }
      }
    }
  }
`;