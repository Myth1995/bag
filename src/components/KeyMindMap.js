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
    min-height: 555px;
    .back-image {
      position: absolute;
      width: 30%;
      right: -5px;
      bottom: -0.5%;
    }
  }
  .description {
    font-family: 'CocoSharp';
    color: #343a40;
    font-size: 18px;
    margin-bottom: 50px;
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
    font-size: 25px;
    font-weight: bold;
  }  
  .footer {
    margin-top: 25px;
    font-size: 30px;
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
  ${mq.small`
    .mindmap-kind {
      min-height: 500px;
      .back-image {
        width: 36%;
      }
    }
    .description {
      margin-bottom: 0px;
    }
  `}
  ${mq.medium`
    .mindmap-kind {
      padding: 30px 40px;
      .back-image {
        width: 34%;
      }
    }
  `};
  ${mq.large`
    .mindmap-kind .back-image {
      width: 28%;
    }
    .description {
      font-size: 21px;
      .title {
        font-size: 55px;
      }
      .subtitle {
        font-size: 30px;
      }
    }
  `}
  ${mq.xLarge`
    .mindmap-kind {
      padding: 30px 40px;
      .back-image {
        width: 24%;
      }
    }
    .description {
      font-size: 25px;
    }
  `};
  ${mq.xxLarge`
    .mindmap-kind {
      .back-image {
        width: 22%;
        max-width: 330px;
      }
    }
  `}  
`

const KeyMindMap = () => {
  return (
    <MindKind>
      <div className="mindmap-kind">
        <img className="back-image" src="/image/key_back.png" />
        <div className="description">
          <div className="title">
            Your investment key
          </div>
            In collaboration with Omerta geeks, <br />
            we would like to announce that BagUP holders who are<br />
            interested in starting their own NFT projects can <br />
            take advantage of 50% discount on all NFT services, <br />
            including art services, website and discord setups and security, <br />
            smart contracts, etc..<br />
            Check out our discord for more informations
        </div>
      </div>
    </MindKind>
  )
}

export default KeyMindMap;