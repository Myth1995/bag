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
  img {
    width: 35%;
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
    color: ${(props) => props.color};
    font-size: 55px;
    line-height: 72px;
    font-weight: bold;
    padding: 10px;
  }
  .description {
    font-family: 'CocoSharp';
    white-space: pre-line;
    color: ${(props) => props.color};
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
    }
  `}
`

const Team = (props) => {

  return (
    <TeamContainer back={props.data.back} color={props.data.color}>
      <img className="back" src={props.data.back} />
      <img src={props.data.logo} />
      <div className='title'>
        {props.data.name}
      </div>
      <div className='description'>
        {props.data.description}
      </div>
    </TeamContainer>
  )
}

export default Team;