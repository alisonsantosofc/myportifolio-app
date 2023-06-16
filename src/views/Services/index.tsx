import { X, CheckCircle, Browsers } from "@phosphor-icons/react";
import { StyledServices } from "./styles";

export default function Services() {
  return (
    <StyledServices className="section" id="default">
      <h2 className="section-title">Serviços</h2>
      <span className="section-subtitle">O que eu ofereço</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div className="services-title">
            <Browsers />
            <h3>
              Design de <br /> Produto
            </h3>
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
                  <p>Eu desenvolvo interfaces de usuário.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Desenvolvimento de páginas web.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Eu crio interações de elemento ux.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Posiciono a marca da sua empresa.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Design e mockups de produtos para empresas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div className="services-title">
            <Browsers />
            <h3>
              Design de <br /> UI/UX
            </h3>
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
                  <p>Eu desenvolvo interfaces de usuário.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Desenvolvimento de páginas web.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Eu crio interações de elemento ux.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Posiciono a marca da sua empresa.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Design e mockups de produtos para empresas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
                  <p>Eu desenvolvo interfaces de usuário.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Desenvolvimento de páginas web.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Eu crio interações de elemento ux.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Posiciono a marca da sua empresa.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Design e mockups de produtos para empresas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledServices>
  )
}
