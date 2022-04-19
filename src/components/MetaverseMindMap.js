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
    min-height: 650px;
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
      min-height: auto;
      .back-image {
        width: 44%;
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
        width: 40%;
      }
    }
  `};
  ${mq.large`
    .mindmap-kind .back-image {
      width: 36%;
    }
    .description {
      font-size: 21px;
      .title {
        font-size: 50px;
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
        width: 34%;
      }
    }
    .description {
      font-size: 25px;
    }
  `};
  ${mq.xxLarge`
    .mindmap-kind {
      .back-image {
        width: 25%;
        max-width: 450px;
      }
    }
  `}  
`

const MetaverseMindMap = () => {
  return (
    <MindKind>
      <div className="mindmap-kind">
        <img className="back-image" src="/image/metaverse_back.png" />
        <div className="description">
          <div className="title">
            METAVERSE
          </div>
            in our way to finish the adventure, we will be lost<br />
            in the metaverse trying to find the crib.<br />
            As the digital world develops, we will follow along. <br />
            We are always open to new ideas and updates
          <div className="subtitle">
            Art and music festivals
            &nbsp;
            <span className="processing">processing</span>
          </div>
            your BAGUP will be your ticket to virtual art and music<br />
            festivals, artists from our community will have the chances<br />
            to expose their art and shine 
          <div className="subtitle">
            The Crib
            &nbsp;
            <span className="processing">Exploring</span>
          </div>
            all gang members meet <br />
            at the crib which is their favorite virtual <br />
            place in the metaverse. 
        </div>
      </div>
    </MindKind>
  )
}

export default MetaverseMindMap;