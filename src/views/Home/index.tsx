import { Info } from "./Info";
import { Social } from "./Social";

import { HomeContainer } from "./styles";
import { ScrollDown } from "./ScrollDown";

export function Home() {
  return (
    <HomeContainer className="section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Info />

          <div className="avatar-container">
            <div className="home-img">
            </div>
            
            <Social />
          </div>
        </div>

        <ScrollDown />
      </div>
    </HomeContainer>
  )
}
