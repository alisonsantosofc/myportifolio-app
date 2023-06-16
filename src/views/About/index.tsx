import { FileArrowDown } from "phosphor-react";
import { BsCup } from "react-icons/bs";

import { Button } from "../../components/Button";
import { AboutInfo } from "./Info";

import cv from "../../assets/curriculo.pdf";

import { StyledAbout } from "./styles";

export default function About() {
  return (
    <StyledAbout className="section" id="about">
      <h2 className="section-title">Sobre mim</h2>
      <span className="section-subtitle">Minha introdução</span>

      <div className="about-container container">
        <div className="about-highlight">
          <div className="curves-container">
            <i className="line"></i>
            <i className="line"></i>
            <i className="line"></i>
          </div>

          <BsCup />
        </div>

        <div className="about-info">
          <AboutInfo />

          <p>
            Sou desenvolvedor de software há mais de três anos, nesse 
            período trabalhei utilizando conceitos de UX/UI, páginas 
            web responsivas, projetos de aplicativos móveis e APIs REST.
          </p>

          <Button icon={<FileArrowDown />}>
            <a href="#contact">
              Baixar Currículo
            </a>
          </Button>
        </div>
      </div>
    </StyledAbout>
  )
}
