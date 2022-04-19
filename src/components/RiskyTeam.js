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
    color: #882967;
    font-size: 55px;
    line-height: 72px;
    font-weight: bold;
    padding: 10px;
    z-index: 1;
  }
  .description {
    font-family: 'CocoSharp';
    white-space: pre-line;
    color: #882967;
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
    .back {
      top: 11%;
      right: -8%;
      width: 32%;
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
      top: 8%;
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
      top: 3%;
      right: -6%;
    }
  `}
  ${mq.xLarge`
    .back {
      top: 5%;
      right: -5%;
      width: 28%;
    }
  `}
  ${mq.xxLarge`
    .back {
      width: 22%;
      right: -4%;
    }
  `}
`

const RiskyTeam = () => {

  return (
    <TeamContainer>
      <img className="back" src= "/image/teams/Roller.png"/>
      <img className='logo' src="/image/highroller.png" />
      <div className='title'>
        Risky ?
      </div>
      <div className='description'>
        {`For those who like to risk, especially \ncasino gamblers and NFT flippers, \nHigh Rollers is a team dedicated to discussing \nchances and opportunities.`}
      </div>
    </TeamContainer>
  )
}

export default RiskyTeam;