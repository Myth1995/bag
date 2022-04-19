import React from "react"
import styled from "@emotion/styled"

const BagContainer = styled("div")`
  padding-top: 6%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`

export default function Bag() {
  return (
    <BagContainer>
      <img src="/image/Page-3.png" />
    </BagContainer>
  )
}
