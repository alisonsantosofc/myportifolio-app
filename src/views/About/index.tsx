import { File } from "phosphor-react";

import { Button } from "../../components/Button";
import { AboutInfo } from "./Info";

import aboutImg from "../../assets/about.jpg";
import cv from "../../assets/curriculo.pdf";

import { StyledAbout } from "./styles";

export default function About() {
  return (
    <StyledAbout className="section" id="about">
      <h2 className="section-title">Sobre mim</h2>
      <span className="section-subtitle">Minha introdução</span>

      <div className="about-container container grid">
        <img src={aboutImg} alt="" className="about-image" />

        <div className="about-info">
          <AboutInfo />

          <p>
            Sou desenvolvedor de software há mais de três anos, nesse 
            período trabalhei no desenvolvimento de UI páginas web responsivas, 
            projetos de aplicativos móveis e APIs REST.
          </p>

          <Button icon={<File />}>
            <a href="#contact">
              Baixar Currículo
            </a>
          </Button>
        </div>
      </div>
    </StyledAbout>
  )
}
