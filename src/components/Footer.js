import React from "react"
import styled from "@emotion/styled"
import mq from "../mediaQuery"

const FooterContainer = styled("div")`
  width: 100%;
  height: 95px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  color: white;
  z-index: 10;
  background-color: #1b1e22;
  
  .footer {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: sans-serif;
    font-size: 17px;
    .reserve {
      text-align: center;
    }
  }
  .links {
    display: flex;
    .link {
      cursor: pointer;
      margin-right: 25px;
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }
  }

  ${mq.small`
    .footer .reserve {
      font-size: 25px;
    }
  `}
  ${mq.large`
    .footer {
      flex-direction: row;
    }
  `}
`

export default function Footer(props) {
  return (
    <FooterContainer>
      <div className="footer">
        <div className="reserve">
          © 2022 Akuma. All rights reserved.
        </div>
        <div className="links">
          <div className="link">opensea</div>
          <div className="link">discord</div>
          <div className="link">twitter</div>
        </div>
      </div>
    </FooterContainer>
  )
}
