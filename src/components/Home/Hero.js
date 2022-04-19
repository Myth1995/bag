import React from "react"
import styled from "@emotion/styled"

const HeroContainer = styled("div")`
  background-image: url("/image/Page1_Doodle.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  position: relative;
  margin-top: -6%;
  margin-bottom: -6.05%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  .doodle {
    width: 100%;
  }
  .logo {
    width: 48%;
    z-index: 10;
    margin: 15% 0px 0px 11%;
  }
  .rest {
    background-color: #1b1e22;
    width: 100%;
    height: calc(100vh - 100px);
  }
`
  
export default function Hero(props) {
  return (
    <HeroContainer id="home">
      <img className="logo" src="/image/Page1_Logo.png" />
    </HeroContainer>
  )
}
