import { styled } from "styled-components";

export const StyledQualification = styled.section`
  .qualification-container {
    max-width: 768px;
  }

  .qualification-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .qualification-button {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.title};
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      color: ${({theme}) => theme.effects.hoverLight(theme.colors.title)};
    }

    svg {
      font-size: 2rem;
      margin-right: 0.5rem;
    }
  }

  .qualifications-sections {
    display: grid;
    grid-template-columns: 0.5fr;
    justify-content: center;
  }

  .qualification-content {
    display: none;

    &.active {
      display: block;
    }
  }

  .qualification-info {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
  }

  .qualification-title {
    
  }
`;