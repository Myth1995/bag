import React from 'react';
import styled from "@emotion/styled"
import mq from '../mediaQuery'

const TeamContainer = styled("div")`
  position: relative;
  overflow: hidden;
  margin: 10px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  .logo {
    width: 15%;
    max-width: 150px;
  }
  .back {
    position: absolute;
    top: 25%;
    right: -8%;
    width: 30%;
  }
  .title {
    text-align: center;
    font-family: 'CocoSharp';
    color: #643298;
    font-size: 55px;
    line-height: 72px;
    font-weight: bold;
    padding: 10px;
    z-index: 1;
  }
  .description {
    font-family: 'CocoSharp';
    white-space: pre-line;
    color: #643298;
    font-size: 20px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 85px;
    z-index: 1;
  }
  ${mq.small`
    margin: 25px;
    img {
      width: 25%;
    }
    .description {
      font-size: 20px;
    }
  `}
  ${mq.medium`
    margin: 35px;
    padding: 50px 50px;
    .description {
      font-size: 27px;
    }
    .back {
      top: 25%;
      right: -9%;
      width: 32%;
    }
  `}
  ${mq.large`
    margin: 45px;
    padding: 50px 50px;
    .title {
      font-size: 80px;
      padding: 30px;
    }
    .description {
      font-size: 30px;
    }
    .back {
      top: 17%;
      right: -10%;
      width: 35%;
    }
  `}
  ${mq.xLarge`
    .back {
      top: 9%;
      right: -11%;
      width: 40%;
    }
  `}
  ${mq.xxLarge`
    .back {
      width: 30%;
      right: -125px;
      max-width: 600px;
    }
  `}
`

const GangTeam = () => {

  return (
    <TeamContainer>
      <img className="back" src= "/image/teams/Arty.png"/>
      <img className='logo' src="/image/arty.png" />
      <div className='title'>
        Creative Gang
      </div>
      <div className='description'>
        {`Artists, graphic designers, music producers,\nare joining forces to form Arty, a place where\nthey can collectively create and collaborate. \nThere will be many opportunities for \nartists in the team`}
      </div>
    </TeamContainer>
  )
}

export default GangTeam;