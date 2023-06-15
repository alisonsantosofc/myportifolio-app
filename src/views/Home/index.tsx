import { Data } from "./Data";
import { Social } from "./Social";

import avatarImg from "../../assets/avatar.jpg";

import { HomeContainer } from "./styles";
import { ScrollDown } from "./ScrollDown";

export function Home() {
  return (
    <HomeContainer className="section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />

          <div className="home-img">
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </HomeContainer>
  )
}
