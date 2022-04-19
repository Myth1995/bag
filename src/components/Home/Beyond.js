import React from "react"
import styled from "@emotion/styled"

import mq from "../../mediaQuery"

const BeyondContainer = styled("div")`
  position: relative;
  overflow: hidden;
  background-color: #343a40;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-content: center;

  .content_text {
    padding: 5% 0;
    z-index: 1;
    color: white;
    letter-spacing: 1px;
    .title {
      color: #eb335e;
      font-family: 'BsFont';
      font-size: 3rem;
      text-align: center;
    }
    .subtitle {
      font-family: 'LemonMilk';
      font-size: 1rem;
      text-align: center;
      line-height: 2.5rem;
      font-weight: bold;
    }
    .content {
      padding: 25px 0px;
      font-family: 'CocoSharp';
      font-size: 1rem;
      text-align: center;
      br {
        display: none;
      }
    }
    .footer {
      font-family: 'BsFont';
      font-size: 1.5rem;
      text-align: center;
    }
  }
  .down-right {
    position: absolute;
    width: 20%;
    left: 0px;
    bottom: 2%;
  }
  .up-right {
    position: absolute;
    right: 0px;
    top: 3%;
    width: 20%;
  }
  .up-left {
    position: absolute;
    top: 5%;
    left: 4%;
    width: 20%;
  }
  .down-left {
    position: absolute;
    width: 20%;
    right: 0px;
    bottom: -4%;
  }
  ${mq.xs`
    .down-left {
      bottom: -7%;
    }
    .context_text {
      top: 15%;
    }
    .content_text .title {
      font-size: 3rem;
    }
    .content_text .subtitle {
      font-size: 1rem;
      line-height: 2.5rem;
    }
  `};
  ${mq.small`
    .content_text .description {
      display: block;
    }
    .content_text .footer {
      display: block;
    }
    .content_text .title {
      font-size: 5rem;
    }
    .content_text .subtitle {
      font-size: 1rem;
      line-height: 3rem;
    }
    .content_text .content {
      br {
        display: block;
      }
    }
  `};
  ${mq.medium`
    .content_text .title {
      font-size: 7rem;
    }
    .content_text .subtitle {
      font-size: 18px;
      line-height: 4rem;
    }
    .content_text .content {
      font-size: 20px;
    }
    .content_text .footer {
      font-size: 2rem;
    }
    img {
      max-width: 160px;
    }
    .down-left {
      bottom: -30px
    }
  `};
  ${mq.large`
    .content_text .title {
      font-size: 9rem;
    }
    .content_text .subtitle {
      font-size: 22px;
      line-height: 5rem;
    }
    .content_text .content {
      font-size: 30px;
    }
    .content_text .footer {
      font-size: 3rem;
    }
  `};
  ${mq.xLarge`
    .content_text .title {
      font-size: 10rem;
    }
    .content_text .subtitle {
      font-size: 27px;
      line-height: 5rem;
    }
    .content_text .content {
      font-size: 2rem;
    }
    .content_text .footer {
      font-size: 4rem;
    }
  `}
  ${mq.xxLarge`
    .content_text .title {
      font-size: 12rem;
    }
    .content_text .subtitle {
      font-size: 33px;
      line-height: 5rem;
    }
    .content_text .content {
      font-size: 2.5rem;
    }
    .content_text .footer {
      font-size: 4rem;
    }
  `}
`

export default function Beyond(props) {
  return (
    <BeyondContainer id="beyond">
      <img className="down-right" src="/image/bull.png" />
      <img className="up-right" src="/image/bear.png" />
      <img className="up-left" src="/image/Doodle-diamond.png" />
      <img className="down-left" src="/image/Doodle-cup.png" />
      <div className="content_text">
        <div className="title">
          Beyond
        </div>
        <div className="subtitle">
          for the community, by the community
        </div>
        <div className="content">
          a metaverse brand  made up of people <br />
          from various specializations  including <br />
          blockchain and crypto experts, traders. devs . <br />
          graphic designers, artists,marketers, managers, <br />
          and collectors all uniting together  to build  a <br />
          strong web3 brand that creates dope projects.<br />
          BagUp gang is a limited collection of 2.222 avatars that gives you<br />
          acces to be part of beyond, you will be able to enter exclusive<br />
          events and festivals, recive airdrops, acces to<br />
          private giveaways and raffles,<br />
          make votes for beyond decisions and more ...
        </div>
        <div className="footer">
          beyond is built and owned by the community
        </div>
      </div>
    </BeyondContainer>
  )
}
