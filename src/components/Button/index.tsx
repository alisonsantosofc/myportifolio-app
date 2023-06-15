import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  typed?: "success" | "warning" | "info" | "error" | "transparent";
  size?: "small" | "normal" | "large";
  bg?: string;
  icon?: ReactNode;
}

export function Button({ children, color, typed, size, bg, icon, ...props }: ButtonProps) {
  return (
    <StyledButton size={size} color={color} typed={typed} bg={bg} {...props}>
      {children}
      {icon}
    </StyledButton>
  );
}
