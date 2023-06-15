import { HandWaving, PaperPlaneTilt } from "phosphor-react";

export function Info() {
  return (
    <div className="data-container">
      <h1>
        Alison Santos
        <HandWaving />
      </h1>
      <h3>Web Developer</h3>
      <p>
        Enthusiast of the best web and mobile development technologies.
      </p>
      <a href="#contact" className="button button-flex">
        Talk to me
        <PaperPlaneTilt />
      </a>
    </div>
  )
}
