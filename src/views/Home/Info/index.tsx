import { HandWaving, PaperPlaneTilt } from "phosphor-react";
import { Button } from "../../../components/Button";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../../../styles/themes";

export function Info() {
  const { darkMode } = useDarkMode();

  return (
    <div className="info-container">
      <h1>
        Alison Santos
        <HandWaving />
      </h1>
      <h3>Web Developer</h3>
      <p>
        Enthusiast of the best web and mobile development technologies.
      </p>
      <Button 
        icon={<PaperPlaneTilt />} 
        bg={!darkMode ? lightTheme.colors.main : darkTheme.colors.main}
      >
        <a href="#contact">
          Talk to me
        </a>
      </Button>
    </div>
  )
}
