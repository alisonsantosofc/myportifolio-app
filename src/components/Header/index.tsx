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
            Alison Santos
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
                <House /> Início
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                <User /> Sobre
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                <Flask /> Habilidades
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                <Briefcase /> Serviços
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                <Image /> Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                <PaperPlaneTilt /> Contato
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
