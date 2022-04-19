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
    color: #144f70;
    font-size: 55px;
    line-height: 72px;
    font-weight: bold;
    padding: 10px;
    z-index: 1;
  }
  .description {
    font-family: 'CocoSharp';
    white-space: pre-line;
    color: #144f70;
    font-size: 20px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 85px;
    z-index: 1;
  }
  ${mq.small`
    margin: 25px;
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
      right: -9%;
    }
  `}
`

const SageTeam = () => {

  return (
    <TeamContainer>
      <img className="back" src= "/image/teams/Alien.png"/>
      <img className="logo" src="/image/alien.png" />
      <div className='title'>
        Sage!
      </div>
      <div className='description'>
        {`Devs, Discord Masters, Marketers, Web 3 techies and \n Business owners. This will be your fav place in \nthe metaverse, As part of their main focus, \naliens build, create, work and grow together\nbeing in the alien team will give you oppurtunities\nto hangout with those at high levels`}
      </div>
    </TeamContainer>
  )
}

export default SageTeam;