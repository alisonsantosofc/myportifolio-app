import { CalendarBlank, CalendarCheck, Certificate, Student } from "@phosphor-icons/react";

import { StyledQualification } from "./styles";

export default function Qualification() {
  return (
    <StyledQualification className="section" id="qualification">
      <h2 className="section-title">Qualificações</h2>
      <span className="section-subtitle">Minha jornada pessoal</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div className="qualification-button active">
            <Student />
            Educação
          </div>
          <div className="qualification-button">
            <Certificate />
            Experiência
          </div>
        </div>

        <div className="qualification-sections">
          <div className="qualification-content active">
            <div className="qualification-info">
              <div className="qualification-title">
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <span>UNINASSAU</span>

                <div className="qualification-calendar">
                  <CalendarBlank />
                  2022 - Presente
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-info">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              
              <div className="qualification-title">
                <h3>Impulso React Developer</h3>
                <span>DIO</span>

                <div className="qualification-calendar">
                  <CalendarCheck />
                  2021 - 2021
                </div>
              </div>
            </div>

            <div className="qualification-info">
              <div className="qualification-title">
                <h3>Algoritmo</h3>
                <span>UNIASSELVI</span>

                <div className="qualification-calendar">
                  <CalendarCheck />
                  2021 - 2021
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-info">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              
              <div className="qualification-title">
                <h3>Javascript</h3>
                <span>Fundação Bradesco</span>

                <div className="qualification-calendar">
                  <CalendarCheck />
                  2021 - 2021
                </div>
              </div>
            </div>

            <div className="qualification-info">
              <div className="qualification-title">
                <h3>HTML e CSS</h3>
                <span>Fundação Bradesco</span>

                <div className="qualification-calendar">
                  <CalendarCheck />
                  2021 - 2021
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-info">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              
              <div className="qualification-title">
                <h3>HTML Web Developer</h3>
                <span>DIO</span>

                <div className="qualification-calendar">
                  <CalendarCheck />
                  2021 - 2021
                </div>
              </div>
            </div>
          </div>

          <div className="qualification-content">
            <div className="qualification-info">
              <div className="qualification-title">
                <h3>Desenvolvedor de Software Júnior</h3>
                <span>Máquina de Lucro</span>

                <div className="qualification-calendar">
                  <CalendarCheck />
                  2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-info">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              
              <div className="qualification-title">
                <h3>Desenvolvedor de Software Pleno</h3>
                <span>Máquina de Lucro</span>

                <div className="qualification-calendar">
                  <CalendarBlank />
                  2022 - Presente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledQualification>
  )
}
