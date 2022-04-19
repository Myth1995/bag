import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Grid from '@mui/material/Grid';

import mq from "../mediaQuery"
import VisionMindMap from './VisionMindMap';
import CommunityMindMap from "./CommunityMIndMap";
import MetaverseMindMap from "./MetaverseMindMap";
import AirdropMindMap from "./AirdropMindMap";
import KeyMindMap from "./KeyMindMap";


const Item = styled('div')`
  height: calc(100% / ${(props) => props.number});
  div {
    position: relative;
    height: calc(100% - 5px);
  }
  img {
    width: 100%;
    height: 100%;
  }
  .mind-text {
    position: absolute;
    bottom: 10%;
    left: 5%;
    font-family: 'LemonMilk';
    color: white;
    font-size: 25px;
    height: fit-content;
  }
  ${mq.large`
    .mind-text {
      font-size: 40px;
    }
  `}
  ${mq.medium`
    .mind-text {
      font-size: 30px;
    }
  `}
  ${mq.small`
    .mind-text {
      font-size: 30px;
    }
  `}
`

const Container = styled("div")`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  .flex-between: {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${mq.medium`
    margin-top: 15px;
  `};
`

const Links = styled("div")`
  max-width: 860px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px 50px;
  ${mq.medium`
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  `}
`

const LinkItem = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px 20px;
  grid-template-areas:
    "img"
    "name"
    "text";

  ${mq.medium`
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto 100px;
    grid-template-areas:
    "img name"
    ". text";
  `};

  img {
    grid-area: img;
    justify-self: start;
    ${mq.medium`
      justify-self: end;
    `};
  }
  h3 {
    font-size: 34px;
    font-family: Karma;
    font-weight: 300;
    color: white;
    grid-area: title;
    margin: 0;

    ${mq.medium`
      font-size: 44px;
    `};
  }
  a {
    grid-area: link;
  }
`

const ExternalLink = styled("a")`
  color: #52e5ff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`

const positionList = [
  {right: 0, bottom: 1.5},
  {right: 0, bottom: -11},
  {right: 0, bottom: -20},
  {right: 0, bottom: -40},
  {right: 0, bottom: 0},
]

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function GetInvolved() {
  const [index, setIndex] = useState(1);
  const { width } = useWindowDimensions();
  const [spacing, setSpacing] = useState(1)

  useEffect(() => {
    if (width < 900) {
      setSpacing(0)
    }
    else
      setSpacing(1)
  }, [width])
  return (
    <Container>
      <Grid container spacing={spacing} alignItems="stretch">
        <Grid className="flex-between" item md={6} xs={12}>
          <Item number={3}>
            <div onClick={() => setIndex(1)} >
              <img src="/image/vision.png" />
              <div className="mind-text">
                VISION
              </div>
            </div>
          </Item>
          <Item number={3}>
            <div onClick={() => setIndex(4)}>
              <img src="/image/airdrop.png" />
              <div className="mind-text">
                AIRDROP <br/>
                & MERCH
              </div>
            </div>
          </Item>
          <Item number={3}>
            <div onClick={() => setIndex(3)}>
              <img src="/image/metaverse.png" />
              <div className="mind-text">
                METAVERSE
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item md={6} xs={12}>
          <Item number={2}>
            <div onClick={() => setIndex(2)}>
              <img src="/image/community.png" />
              <div className="mind-text">
                COMMUNITY <br/>
                & TEAMING
              </div>
            </div>
          </Item>
          <Item number={2}>
            <div onClick={() => setIndex(5)}>
              <img src="/image/key.png" />
              <div className="mind-text">
                YOUR <br/>
                INVESTMENT KEY
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
        {
          index === 1 ? (
            <VisionMindMap></VisionMindMap>
          ) : index === 2 ? (
            <CommunityMindMap></CommunityMindMap>
          ) : index === 3 ? (
            <MetaverseMindMap></MetaverseMindMap>
          ) : index === 4 ? (
            <AirdropMindMap></AirdropMindMap>
          ) : (
            <KeyMindMap></KeyMindMap>
          )
        }
    </Container>
  )
}
