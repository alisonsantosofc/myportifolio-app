import { HandWaving, PaperPlaneTilt } from "phosphor-react";
import { Button } from "../../../components/Button";

export function HomeInfo() {
  return (
    <div className="info-container">
      <h1>
        Alison Santos
        <HandWaving />
      </h1>
      <h3>Desenvolvedor Web</h3>
      <p>
        Entusiasta das melhores tecnologias de desenvolvimento web e mobile.
      </p>
      <Button icon={<PaperPlaneTilt />}>
        <a href="#contact">
          Fale comigo
        </a>
      </Button>
    </div>
  )
}
