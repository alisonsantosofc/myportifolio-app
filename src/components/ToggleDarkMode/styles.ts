import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

interface ToggleDarkModeContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  width: 'small' | 'large';
}

export const ToggleDarkModeContainer = styled.div<ToggleDarkModeContainerProps>`
  label {
    position: absolute;
    width: ${({width}) => width === 'small' ? '48px' : '64px'};
    height: ${({width}) => width === 'small' ? '24px' : '32px'};
    background-color: ${({theme}) => theme.colors.text};
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    overflow: hidden ;
  }

  input {
    display: none;
  }

  svg {
    &.sun-icon {
      position: absolute;
      left: -2rem;
      font-size: ${({width}) => width === 'small' ? '1rem' : '1.5rem'};
      color: ${({theme}) => theme.colors.textContrast};
      margin: 0 0.2rem;
      transition: all 1s;
    }

    &.moon-icon {
      position: absolute;
      right: -1.9rem;
      font-size: ${({width}) => width === 'small' ? '0.9rem' : '1.4rem'};
      color: ${({theme}) => theme.colors.textContrast};
      transition: all 1s;
    }
  }

  .sun-icon.light-selected {
    transform: translateX(2.2rem);
  }

  .moon-icon.dark-selected {
    transform: translateX(-2.2rem);
  }
`;
