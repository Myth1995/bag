import React from "react"
import styled from "@emotion/styled"

import mq from '../../mediaQuery'

const FaqContainer = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  padding: 30px 5px;
  ${mq.medium`
    padding: 50px 15px;
  `};
  .title {
    color: #eb335e;
    font-family: 'BsFont';
    font-size: 60px;
  }
  ${mq.small`
    .title {
      font-size: 72px
    }
    .description {
      br {
        display: block;
      }
    }
  `}
  ${mq.medium`
    .title {
      font-size: 100px;
    }
    .subtitle {
      font-size: 35px;
    }
  `}
  ${mq.large`
    .title {
      font-size: 160px;
    }
  `}
  .subtitle {
    font-family: CocoSharp;
    color: white;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
  }
  .description {
    font-family: sans-serif;
    color: white;
    font-size: 18px;
    text-align: center;
    margin-bottom: 35px;
    br {
      display: none;
    }
  }
  ${mq.medium`
    padding-bottom: 130px;
    .subtitle {
      font-size: 50px;
    }
    .description {
      font-size: 25px;
      br {
        display: block;
      }
    }
  `}
`

export default function Faq(props) {
  return (
    <FaqContainer id="faq">
      <div className="title">
        FAQ
      </div>
      <div className="subtitle">
        What is Bagup gang?
      </div>
      <div className="description">
        a limited quantity collection of 2.222 unique etheruem NFT’s <br />
        carefully handdrawn and programmatically generated, each NFT gives a <br />
        membership access to the gang
      </div>
      <div className="subtitle">
      Utility from holding a bagup NFT
      </div>
      <div className="description">
        - As a team, we are striving towards the same goal, and you will<br />
        be a vital part of the team<br />
        -This nft will give you memebership acces to a super multi-talented community<br />
        -2.222 Holders will claim one free NFT from our next  project<br />
        -BagUP is your ticket to a wide variety of events and experiences <br />
        we will be launching soon<br />
        - Acces to private Raffles, giveaways, and airdrops<br />
        - 50% discount to start your own NFT project<br />
      </div>
      <div className="subtitle">
        What is the realise date and mint price ?<br />
      </div>
      <div className="description">
        X
      </div>
    </FaqContainer>
  )
}
