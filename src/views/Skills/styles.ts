import { styled } from "styled-components";

export const StyledSkills = styled.section`
  .skills-container {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
    justify-content: center;
  }
  
  .skills-content {
    background-color: ${({theme}) => theme.colors.containerBg};
    box-shadow: ${({theme}) => theme.effects.shadowAround};
    padding: 2rem;
    border-radius: 1.25rem;

    h2 {
      font-size: ${({theme}) => theme.text.size.middle};
      font-weight: ${({theme}) => theme.text.weight.middle};
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  .skills-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .skill-item {
    display: flex;
    align-items: center;

    svg {
      font-size: 1.4rem;
      margin-right: 0.8rem;
      color: ${({theme}) => theme.colors.main};
    }

    div {
      h3 {
        font-size: ${({theme}) => theme.text.size.small};
        margin-bottom: -.3rem;
        overflow: hidden;
      }

      span {
        font-size: ${({theme}) => theme.text.size.smaller};
      }
    }
  }

  /*=== Breakpoints ===*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .skills-container {
      display: flex;
      flex-direction: column;
      padding: 0 8rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .skills-container {
      padding: 0 4rem;
    }
  }

  @media screen and (max-width: 576px) {
    .skills-container {
      padding: 0 0rem;
    }

    .skills-content {
      padding: 1.5rem;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;