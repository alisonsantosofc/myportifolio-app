import { Briefcase, Flask, House, Image, PaperPlaneTilt, SquaresFour, User, X } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { useState } from "react";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <HeaderContainer>
      <nav className="container">
        <a href="index.html" className="nav-logo">
          Alison Web Developer
        </a>

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
