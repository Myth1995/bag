import React from "react"
import styled from "@emotion/styled"
import Team from '../Team'
import mq from "../../mediaQuery"
import SageTeam from "../SageTeam"
import GangTeam from "../GangTeam"
import PumpTeam from "../PumpTeam"
import RiskyTeam from "../RiskyTeam"
import VibeTeam from "../VibeTeam"

const TeamsContainer = styled("div")`
  padding: 30px 5px 30px 40px;
  ${mq.medium`
    padding: 50px 15px 50px 80px;
  `};
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-right: 0px;
    .down-right {
      position: absolute;
      width: 22%;
      right: 0px;
      bottom: 0px;
    }
    .up-left {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 15%;
    }
  }
  .title {
    font-family: 'BSFont';
    font-size: 60px;
    color: #eb335e;
  }
  .description {
    text-align: center;
    font-family: 'CocoSharp';
    color: white;
    font-size: 20px;
  }
  .image-container {
    margin: 50px 0px;
    margin-bottom: 15%;
  }
  .image-container img {
    width: 100px;
    margin: 0px 5px;
  }
  ${mq.small`
    .title {
      font-size: 72px
    }
    .description {
      font-size: 20px;
    }
  `}
  ${mq.medium`
    .title {
      font-size: 100px;
    }
    .image-container img {
      margin: 0px 15px;
    }
  `}
  ${mq.large`
    .title {
      font-size: 160px;
    }
    .description {
      font-size: 25px;
    }
  `}
`

const teams_list = [
  {
    id: '1', 
    name: 'Sage!', 
    logo: '/image/alien.png', 
    back: '/image/teams/Alien.png', 
    color: '#144f70', 
    description: `Devs, Discord Masters, Marketers, Web 3 techies and \n Business owners. This will be your fav place in \nthe metaverse, As part of their main focus, \naliens build, create, work and grow together\nbeing in the alien team will give you oppurtunities\nto hangout with those at high levels`
  }, 
  {
    id: '2', 
    name: 'Creative Gang', 
    logo: '/image/arty.png', 
    back: '/image/teams/Arty.png', 
    color: '#643298', 
    description: `Artists, graphic designers, music producers,\nare joining forces to form Arty, a place where\nthey can collectively create and collaborate. \nThere will be many opportunities for \nartists in the team`
  }, 
  {
    id: '3', 
    name: 'Pump or dump?', 
    logo: '/image/blockchain-whale.png', 
    back: '/image/teams/Whale.png', 
    color: '#006d77', 
    description: `The Whales of the Blockchain are a group of \ncrypto traders, miners, and blockchain experts\n dedicated to sharing tips, signals, market \nupdates and also, to have fun \nwith each other`
  }, 
  {
    id: '4', 
    name: 'Risky ?', 
    logo: '/image/highroller.png', 
    back: '/image/teams/Roller.png', 
    color: '#882967', 
    description: `For those who like to risk, especially \ncasino gamblers and NFT flippers, \nHigh Rollers is a team dedicated to discussing \nchances and opportunities. \n`
  }, 
  {
    id: '5', 
    name: 'Good vibes only', 
    logo: '/image/streetboi.png', 
    back: '/image/teams/Boi.png', 
    color: '#513c32', 
    description: `We cater to rule breakers, gamers, and mob, \nso whether you are one of them or not, \nthis is the perfect place to take a pause from \nyour busy life and unwind with the homies. \nEnjoy the good vibes.`
  }, 
]

export default function Teams(props) {
  return (
    <>
      <TeamsContainer id="teams">
        <div className="container">
          <img className="up-left" src="/image/teams/up-left.png" />
          <img className="down-right" src="/image/teams/down-right.png" />
          <div className="title">
            Teams
          </div>
          <div className="description">
            The beautiful doodles drawn in the background of your BagUP NFT represents<br />
            your team membership. Choose your theme and team
          </div>
          <div className="image-container">
            <img className="team" src="/image/alien.png"/>
            <img className="team" src="/image/arty.png"/>
            <img className="team" src="/image/blockchain-whale.png"/>
            <img className="team" src="/image/highroller.png"/>
            <img className="team" src="/image/streetboi.png"/>
          </div>
        </div>
      </TeamsContainer>
      <SageTeam />
      <GangTeam />
      <PumpTeam />
      <RiskyTeam />
      <VibeTeam />
      {/* {
        teams_list.map((data) => {
          return (
            <Team data={data} key={data.id}/>
          );
        })
      } */}
    </>
  )
}
