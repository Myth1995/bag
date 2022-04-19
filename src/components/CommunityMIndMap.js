import React from 'react';
import styled from "@emotion/styled"

import mq from '../mediaQuery'

const MindKind = styled('div')`
  width: 100%;
  .mindmap-kind {
    overflow: hidden;
    position: relative;
    padding: 10px 15px;
    border-radius: 15px;
    background-color: white;
  }
  .back-image {
    position: absolute;
    width: 135px;
    right: 0px;
    bottom: -25px;
  }
  .description {
    font-family: 'CocoSharp';
    color: #343a40;
    font-size: 16px;
  }
  .description .bold {
    font-weight: bold;
  }
  .title {
    font-family: 'LemonMilk';
    padding: 15px 0px;
    font-size: 22px;
    font-weight: bolder;
  }
  .subtitle {
    margin-top: 25px;
    font-size: 30px;
    font-weight: bold;
  }
  .footer {
    margin-top: 25px;
    font-size: 30px;
    font-weight: bold;
  }
  .image-container {
    margin: 50px 0 50px 0;
  }
  .image-container img {
    width: 100px;
    margin-right: 10px;
  }
  .processing {
    font-size: 25px;
    font-weight: normal;
    background-color: red;
    color: white;
    width: fit-content;
  }
  ${mq.xs`
    .back-image {
      width: 156px;
      bottom: -30px;
    }
    .title {
      font-size: 28px;
    }
    .description {
      font-size: 18px;
    }
    .subtitle {
      font-size: 35px;
    }
  `}
  ${mq.small`
    min-height: 750px;
    .image-container {
      padding-right: 155px;
    }
    .back-image {
      width: 185px;
      bottom: -35px;
    }
    .title {
      font-size: 40px;
    }
    .subtitle {
      font-size: 35px;
    }
  `}
  ${mq.medium`
    .image-container {
      padding-right: 0px;
    }
    .back-image {
      width: 243px;
      bottom: -47px;
    }
    .mindmap-kind {
      padding: 30px 40px;
    }
    .description {
      font-size: 23px;
    }
    .title {
      font-size: 52px;
    }
    .subtitle {
      font-size: 35px;
    }
    .image-container {
      margin-bottom: 135px;
    }
  `};
  ${mq.large`
    .back-image {
      width: 376px;
      bottom: -72px;
    }
    .title {
      font-size: 68px;
    }
    .subtitle {
      font-size: 35px;
    }
    .description {
      font-size: 26px;
    }
  `} 
  ${mq.xLarge`
    .mindmap-kind {
      padding: 30px 40px;
      .back-image {
        width: 570px;
        bottom: -107px;
      }
    }
    .description {
      font-size: 30px;
    }
  `};
  ${mq.xxLarge`
    .mindmap-kind {
      padding: 30px 40px;
    }
  `};
`

const CommunityMindMap = () => {
  return (
    <MindKind>
      <div className="mindmap-kind">
        <img className="back-image" src="/image/community_back.png" />
        <div className="description">
          <div className="title">
            {'COMMUNITY \& TEAMING'}
          </div>
            - Sometimes your circle decreases in size but increases in value.<br />
            In order to make it easier for the community to connect and get to know one another, <br />
            we have chosen to reduce the number of holders, community is always first.<br />
            - Our first priority is to make you feel comfortable within the community. <br />
            We created the concept of teams where you can hang out with people <br />
            who share the same interests and skills as you<br />
            to relax, create, and have fun together<br />
            - More about the teams system :
        </div>
        <div className="image-container">
          <img src="/image/alien.png"/>
          <img src="/image/arty.png"/>
          <img src="/image/blockchain-whale.png"/>
          <img src="/image/highroller.png"/>
          <img src="/image/streetboi.png"/>
        </div>
      </div>
    </MindKind>
  )
}

export default CommunityMindMap;