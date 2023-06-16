import { CheckCircle, Headset, Medal } from "phosphor-react"

export function AboutInfo() {
  return (
    <div className="info-container grid">
      <div className="about-box">
        <Medal />
        <div>
          <h3>Experiência</h3>
          <p>mais de <span>3</span> anos trabalhando</p>
        </div>
      </div>

      <div className="about-box">
        <CheckCircle />
        <div>
          <h3>Finalizados</h3>
          <p>mais de <span>4</span> projetos</p>
        </div>
      </div>

      <div className="about-box">
        <Headset />
        <div>
          <h3>Suporte</h3>
          <p>online das <span>6h</span> ás <span>00h</span> por dia</p>
        </div>
      </div>
    </div>
  )
}
