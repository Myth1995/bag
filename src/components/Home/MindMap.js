import React from "react"
import styled from "@emotion/styled"
import GetInvolved from "../GetInvolved";
import Navigation from "../Navigation";

import mq from "../../mediaQuery";

const { innerWidth: width, innerHeight: height } = window;

const MindMapContainer = styled("div")`
  padding: 5px;
  background-color: #1b1e22;
  width: ${width-50};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .map-kind {
    width: 50%;
  }
  .map-kind img {
    width: 100%;
  }
  ${mq.medium`
    padding: 15px;
  `};
`

export default function MindMap(props) {
  return (
    <MindMapContainer id="mindmap">
      <img src="/image/Page-4.png" />
      <GetInvolved />
    </MindMapContainer>
  )
}
