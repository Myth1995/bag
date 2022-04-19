import React from 'react';
import styled from "@emotion/styled"

import mq from '../mediaQuery'

const MindKind = styled('div')`
  width: 100%;
  .mindmap-kind {
    position: relative;
    padding: 10px 15px;
    border-radius: 15px;
    background-color: white;
    min-height: 475px;
    .back-image {
      position: absolute;
      width: 30%;
      right: 0px;
      bottom: 1.5%;
    }
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
    font-size: 35px;
    font-weight: bolder;
    line-height: 50px;
  }
  .subtitle {
    margin-top: 25px;
    font-size: 30px;
    font-weight: bold;
  }
  .footer {
    margin-top: 25px;
    font-weight: bold;
  }
  .image-container {
    margin: 50px 0 20px 0;
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
    .title {
      font-size: 28px;
    }
    .subtitle {
      font-size: 35px;
    }
  `}
  ${mq.small`
    .title {
      font-size: 40px;
    }
    .subtitle {
      font-size: 35px;
    }
    .back-image {
      bottom: 3%;
    }
  `}
  ${mq.medium`
    .title {
      font-size: 52px;
    }
    .subtitle {
      font-size: 35px;
    }
    .description {
      font-size: 21px;
    }
    .mindmap-kind {
      padding: 30px 40px;
    }
  `}
  ${mq.large`
    .title {
      font-size: 62px;
    }
    .subtitle {
      font-size: 35px;
    }
  `}
  ${mq.xLarge`
    .mindmap-kind {
      padding: 30px 40px;
    }
    .title {
      font-size: 68px;
    }
    .description {
      font-size: 29px;
    }
    .back-image {
      width: 33%;
      bottom: 4%;
    }
  `};
  ${mq.xxLarge`
    .back-image {
      width: 23%;
      max-width: 500px;
    }
  `} 
`

const VisionMindMap = () => {
  return (
    <MindKind>
      <div className="mindmap-kind">
        <img className="back-image" src="/image/vision_back.png" />
        <div className="description">
          <div className="title">
            VISION
          </div>
            Its just you! with a <span className="bold">BAG UP</span><br />
            BagUP gang members are taggers of the metaverse, they are in<br />
            an adventure to leave their tags all over the world. <br />
            Using dope bags to cover up, they keep their<br />
            identities a secret in order to not get caught and bagged up!<br />
            Their adventure together will led them to get to know each other
          <div className="footer">
            Ready to take this adventure ?<br />
            get your baggie to have a membership acces to the gang
          </div>
        </div>
      </div>
    </MindKind>
  )
}

export default VisionMindMap;