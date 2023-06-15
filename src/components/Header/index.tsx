import { Briefcase, Flask, House, Image, PaperPlaneTilt, SquaresFour, User, X } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { useState } from "react";
import { ToggleDarkMode } from "../ToggleDarkMode";
import { useDarkMode } from "../../hooks/useDarkMode";

export function Header() {
  const {darkMode, handleSetDarkMode} = useDarkMode();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <HeaderContainer>
      <nav className="container">
        <div className="nav-logo">
          <a href="index.html" className="logo-link">
            Alison Web Developer
          </a>
          <ToggleDarkMode 
            darkMode={darkMode} 
            onHandleDarkMode={() => handleSetDarkMode()}
            width="small"
          />
        </div>
        

        <div className={`nav-menu ${isOpenMenu ? 'show' : ''}`}>
          <ul className="grid">
            <li>
              <a href="#home" className="nav-link active">
                <House /> Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                <User /> About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                <Flask /> Skills
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                <Briefcase /> Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link">
                <Image /> Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <PaperPlaneTilt /> Contact
              </a>
            </li>
          </ul>

          <X className="nav-close" onClick={() => setIsOpenMenu(!isOpenMenu)} />
        </div>

        <div className="nav-toggle" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <SquaresFour />
        </div>
      </nav>
    </HeaderContainer>
  )
}
