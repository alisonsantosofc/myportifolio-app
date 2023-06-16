import { X, CheckCircle } from "@phosphor-icons/react";
import { StyledServices } from "./styles";

export default function Services() {
  return (
    <StyledServices className="section" id="default">
      <h2 className="section-title">Serviços</h2>
      <span className="section-subtitle">O que eu ofereço</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div className="services-title">
            <h3></h3>
          </div>

          <span className="services-button">
            Veja mais
          </span>

          <div className="services-modal">
            <div className="services-modal-content">
              <X />

              <h3></h3>
              <p>
                Serviço com mais de 3 anos de experiência. Oferecendo 
                um trabalho de qualidade para clientes e empresas.
              </p>

              <ul>
                <li>
                  <CheckCircle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledServices>
  )
}
