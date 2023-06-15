import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  typed?: "success" | "warning" | "info" | "error" | "transparent";
  size?: "small" | "normal" | "large";
  bg?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 1rem;
  color: ${props => props.color ? props.color : props.theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  transition: .3s;
  background: ${({theme, typed, bg}) => typed === "success"
    ? theme.colors.green500
    : typed === "warning"
    ? theme.colors.orange500
    : typed === "info"
    ? theme.colors.blue500
    : typed === "error"
    ? theme.colors.red500
    : typed === "transparent"
    ? theme.colors.bodyBg
    : bg
  };

  color: ${props => props.typed === "transparent" && props.theme.colors.text};
  box-shadow: ${props => props.typed === "transparent" && props.theme.effects.shadowAround};

  width: ${props => props.size === "large" ? '100%' : ''};

  > * {
    color: ${props => props.color ? props.color : props.theme.colors.white};
  }

  > * {
    color: ${props => props.typed === "transparent" && props.theme.colors.text};
  }

  &:hover {
    background: ${({theme, typed, bg}) => typed === "success"
    ? theme.effects.hoverLight(theme.colors.green500)
    : typed === "warning"
    ? theme.effects.hoverLight(theme.colors.orange500)
    : typed === "info"
    ? theme.effects.hoverLight(theme.colors.blue500)
    : typed === "error"
    ? theme.effects.hoverLight(theme.colors.red500)
    : typed === "transparent"
    ? theme.effects.hoverLight(theme.colors.bodyBg)
    : theme.effects.hoverLight((bg as string))
  };
  }

  svg {
    font-size: 1.4rem;
    margin-left: .6rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 2rem; 
  }
`;
