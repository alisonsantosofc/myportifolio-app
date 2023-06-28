import { X, CheckCircle, Browsers, CaretRight, Database, Layout } from "@phosphor-icons/react";
import { StyledServices } from "./styles";
import { useState } from "react";

export function Services() {
  const [selectedTab, setSelectedTab] = useState(0);

  function toggleTab(index: number) {
    setSelectedTab(index);
  }

  return (
    <StyledServices className="section" id="services">
      <h2 className="section-title">Serviços</h2>
      <span className="section-subtitle">O que eu ofereço</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div className="services-title">
            <Browsers />
            <h3>
              Desenvolvimento <br /> de Frontend
            </h3>
          </div>

          <span 
            className="services-button"
            onClick={() => toggleTab(1)}
          >
            Veja mais
            <CaretRight weight="bold"/>
          </span>

          <div className={`services-modal ${selectedTab === 1 ? 'active' : ''}`}>
            <div className="services-modal-content">
              <X onClick={() => toggleTab(0)} />

              <h3>Desenvolvimento de Frontend</h3>
              <p>
                Serviço com mais de 3 anos de experiência. Oferecendo 
                um trabalho de qualidade para clientes e empresas.
              </p>

              <ul className="grid">
                <li>
                  <CheckCircle />
                  <p>Criação de interfaces de usuário atraentes e responsivas.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Implementação de designs e protótipos.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Construção de componentes modulares e reutilizáveis.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Conexão com APIs para buscar e enviar dados.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Utilização de bibliotecas e frameworks populares.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Oferta de serviços de manutenção e suporte.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div className="services-title">
            <Layout />
            <h3>
              Design de UX/UI <br /> com Figma
            </h3>
          </div>

          <span 
            className="services-button"
            onClick={() => toggleTab(2)}
          >
            Veja mais
            <CaretRight weight="bold"/>
          </span>

          <div className={`services-modal ${selectedTab === 2 ? 'active' : ''}`}>
            <div className="services-modal-content">
              <X onClick={() => toggleTab(0)} />

              <h3>Design de UX/UI com Figma</h3>
              <p>
                Ofereço serviços de UX/UI com o Figma, proporcionando 
                uma experiência de usuário excepcional e designs atraentes.
              </p>

              <ul className="grid">
                <li>
                  <CheckCircle />
                  <p>Criação de designs de interfaces de usuário atraentes.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Criação de protótipos interativos de alta fidelidade.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Adaptação de designs para diferentes dispositivos.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Mapeamento e definição do fluxo de navegação da aplicação.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Criação de wireframes e esboços de baixa fidelidade.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div className="services-title">
            <Database />
            <h3>
              Desenvolvimento<br />de APIs Node.js
            </h3>
          </div>

          <span 
            className="services-button"
            onClick={() => toggleTab(3)}
          >
            Veja mais
            <CaretRight weight="bold"/>
          </span>

          <div className={`services-modal ${selectedTab === 3 ? 'active' : ''}`}>
            <div className="services-modal-content">
              <X onClick={() => toggleTab(0)} />

              <h3>Desenvolvimento de APIs Node.js</h3>
              <p>
                Criação de APIs escaláveis e eficientes utilizando o 
                Node.js para atender às necessidades específicas 
                de cada projeto.
              </p>

              <ul className="grid">
                <li>
                  <CheckCircle />
                  <p>Design e modelagem de bancos de dados.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Implementação de sistemas de autenticação seguros.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Integração de APIs de terceiros.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Análise e otimização do desempenho.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Testes automatizados para garantir qualidade e estabilidade.</p>
                </li>

                <li>
                  <CheckCircle />
                  <p>Criação de documentação clara e abrangente.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledServices>
  )
}
