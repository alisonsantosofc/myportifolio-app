import { Moon, Sun } from "phosphor-react";
import { ToggleDarkModeContainer } from "./styles";

interface ToggleDarkModeProps {
  darkMode: boolean;
  onDarkMode: () => void;
  width: 'small' | 'large';
}

export function ToggleDarkMode({ width, darkMode, onDarkMode }: ToggleDarkModeProps) {
  return (
    <ToggleDarkModeContainer width={width} className="toggle-switch">
      <label>
        <input type="checkbox" onClick={onDarkMode}/>
        <Sun className={`sun-icon ${!darkMode && 'light-selected'}`} />
        <Moon className={`moon-icon ${darkMode && 'dark-selected'}`} />       
      </label>
    </ToggleDarkModeContainer>
  )
}
