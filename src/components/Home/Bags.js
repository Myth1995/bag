import React from "react"
import styled from "@emotion/styled"
import Grid from '@mui/material/Grid';
import mq from "../../mediaQuery"

const BagsContainer = styled("div")`
  padding: 25px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image-container {
    max-width: 950px;
    .right-align {
      justify-content: center
    }
    .right-align {
      justify-content: center
    }
    @media (min-width: 600px) and (max-width: 899px) {
      .right-align {
        justify-content: flex-end;
      }
      .left-align {
        justify-content: flex-start;
      }
    }
  }
  .title {
    font-family: 'BSFont';
    font-size: 3rem;
    color: #eb335e;
  }
  .description {
    padding: 0px 10px;
    text-align: center;
    font-family: 'CocoSharp';
    color: white;
    font-size: 20px;
  }
  ${mq.xs`
    .title {
      font-size: 3rem;
    }
  `}
  ${mq.small`
    .title {
      font-size: 5rem;
    }
    .description {
      font-size: 20px;
    }
  `}
  ${mq.medium`
    .title {
      font-size: 7rem;
    }
  `}
  ${mq.large`
    .title {
      font-size: 9rem;
    }
    .description {
      font-size: 25px;
    }
  `}
  ${mq.xLarge`
    .title {
      font-size: 10rem;
    }
  `}
`

const ImageContainer = styled('div')`
  margin: 20px 0px;
  padding: 0px 90px;
  display: flex;
  justify-content: center;
  .rotating-border * {
    z-index: 5;
  }
  img {
    width: 25%;
    max-width: 200px;
    margin: 10px;
  }
  .rotating-border img {
    width: 50%;
    margin: 0px;
  }
  .rotating-border {
    width: 185px;
    height: 300px;
    margin: 0px 25px;
    z-index: 0;
    --border-radius: 2rem;
    --border-size: 0.5rem;
    --padding: 0rem;
    
    position: relative;
    overflow: hidden;
    font-size: 2rem;
    padding: calc(var(--padding) + var(--border-size));
    border-radius: var(--border-radius);
    display: inline-block;
    
    &::before {
      content: '';
      display: block;
      background: var(--border-bg);
      width: calc(100% * 2);
      height: calc(100% * 2);
      padding-bottom: calc(100% * 1.41421356237);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      z-index: -2;
      animation: spin 5s linear infinite;
    }
    &::after{
      background-image: ${(p) => `url(${p.back}) !important`};
      background-repeat: no-repeat !important;
      background-size: 100% 100% !important;
      content: '';
      position: absolute;
      inset: var(--border-size);
      background: #1b1e22;
      z-index: -1;
      border-radius: calc(var(--border-radius) - var(--border-size));
    }
  }
`

export default function Bags(props) {
  return (
    <BagsContainer id="bags">
      <div className="title">
        Bags
      </div>
      <div className="description">
        The items in the collection are carefully hand drawn and generated randomly. <br />
        Each one has its own rarity and uniqueness,
      </div>
      <ImageContainer>
        <img src="/image/bags/alpha.png" />
        <img src="/image/bags/iris.png" />
        <img src="/image/bags/bill.png" />
        <img src="/image/bags/Puro.png" />
      </ImageContainer>
      {/* <Grid className="image-container" container direction="row" justifyContent="center">
        <Grid item md={3} sm={6} xs={12}>
          <ImageContainer className="right-align" back="/image/bags/alpha.png">
            <div className="rotating-border rotating-border--google">
            </div>
          </ImageContainer>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <ImageContainer className="left-align" back="/image/bags/iris.png">
            <div className="rotating-border rotating-border--google">
            </div>
          </ImageContainer>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <ImageContainer className="right-align" back="/image/bags/bill.png">
            <div className="rotating-border rotating-border--google">
            </div>
          </ImageContainer>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <ImageContainer className="left-align" back="/image/bags/Puro.png">
            <div className="rotating-border rotating-border--google">
            </div>
          </ImageContainer>
        </Grid>
      </Grid> */}
      <div className="description">
        the collection also includes 4 one-of-a-kinds, which are the most rare items
      </div>
    </BagsContainer>
  )
}
