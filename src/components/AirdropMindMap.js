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
    font-size: 26px;
    font-weight: bolder;
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
    }
    .description {
      margin-bottom: 0px;
    }
  `}
  ${mq.medium`
    .mindmap-kind {
      padding: 30px 40px;
    }
  `};
  ${mq.large`
    .back-image {
      width: 43%;
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
        width: 38%;
      }
    }
    .description {
      font-size: 25px;
    }
  `};
  ${mq.xxLarge`
    .mindmap-kind {
      .back-image {
        width: 23%;
        max-width: 500px;
      }
    }
  `}  
`

const AirdropMindMap = () => {
  return (
    <MindKind>
      <div className="mindmap-kind">
        <img className="back-image" src="/image/airdrop_back.png" />
        <div className="description">
          <div className="title">
            airdrops & merch
          </div>
          <div className="subtitle">
            Flash Drops and Giveways
          </div>
            the first to interract, the one that wins. Keep<br />
            an eye on our social media accounts u dont wanna miss.<br />
            Various  giveaways will be announced in our twitter <br />
            account so stay tuned 
          <div className="subtitle">
            Airdrops
            &nbsp;
            <span className="processing">processing</span>
          </div>
            2.222 Bag up holders will recive a  unique collectible<br />
            from the coming collection
          <div className="subtitle">
            Merch
            &nbsp;
            <span className="processing">Exploring</span>
          </div>
            We already have the experience of creating <br />
            high quality merch, we will be offering our holders<br />
            a unique merch store soon
        </div>
      </div>
    </MindKind>
  )
}

export default AirdropMindMap;