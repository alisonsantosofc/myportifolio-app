import { Backend } from "./Backend";
import { Frontend } from "./Frontend";
import { Mobile } from "./Mobile";
import { UiUx } from "./UiUx";

import { StyledSkills } from "./styles";

export default function Skills() {
  return (
    <StyledSkills className="section" id="default">
      <h2 className="section-title">Habilidades</h2>
      <span className="section-subtitle">Meu nível técnico</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
        <Mobile />
        <UiUx />
      </div>
    </StyledSkills>
  )
}
