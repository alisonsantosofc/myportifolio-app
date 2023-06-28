import { CaretRight, EnvelopeSimple, PaperPlaneTilt, WhatsappLogo } from "@phosphor-icons/react";
import { BsLinkedin } from "react-icons/bs";

import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { StyledContact } from "./styles";

export function Contact() {
  return (
    <StyledContact className="section" id="contact">
      <h2 className="section-title">Contate-me</h2>
      <span className="section-subtitle">Entrar em contato comigo</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Fale comigo</h3>

          <div className="contact-info">
            <div className="contact-card">
              <EnvelopeSimple />

              <h3>Email</h3>
              <span>alisonsantoso22@gmail.com</span>

              <a 
                href="mailto:alisonsantoso22@gmail.com" 
                className="contact-button"
                target="_blank"
              >
                Escrever para mim
                <CaretRight weight="bold"/>
              </a>
            </div>

            <div className="contact-card">
              <WhatsappLogo />

              <h3>Whatsapp</h3>
              <span>{'(81) 98342-3876'}</span>

              <a 
                href="https://wa.me/5581983423876" 
                className="contact-button"
                target="_blank"
              >
                Conversar no whatsapp
                <CaretRight weight="bold"/>
              </a>
            </div>

            <div className="contact-card">
              <BsLinkedin />

              <h3>Linkedin</h3>
              <span>alisonsantosofc</span>

              <a 
                href="https://www.linkedin.com/in/alisonsantosofc" 
                className="contact-button" 
                target="_blank"
              >
                Contato no linkedin
                <CaretRight weight="bold"/>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Fale do seu projeto</h3>

          <form className="contact-form">
            <div className="form-content">
              <Input label="Nome" placeholder="Seu nome completo"/>
              <Input label="Email" type="email" placeholder="Seu email preferido"/>
              <Textarea label="Projeto" placeholder="Fale sobre seu projeto" cols={20} rows={6} />
            </div>

            <div className="btn-container">
              <Button icon={<PaperPlaneTilt />}>
                <a href="#contact">
                  Enviar menssagem
                </a>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </StyledContact>
  )
}
