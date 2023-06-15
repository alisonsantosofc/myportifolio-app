import { ArrowCircleDown, MouseSimple } from "phosphor-react";

export function ScrollDown() {
  return (
    <div className="scrolldown-container">
      <a href="#about" className="scrolldown-button button-flex">
        <MouseSimple className="mouse-simple" />
        <span>Scroll Down</span>
        <ArrowCircleDown className="arrow-down" />
      </a>
    </div>
  )
}
