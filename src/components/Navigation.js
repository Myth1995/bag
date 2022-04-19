import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from 'react-scroll'

import mq from "../mediaQuery"

import { ReactComponent as SmartButton } from '../assets/smart.svg'
import { ReactComponent as OpenseaButton } from '../assets/opensea.svg'
import { ReactComponent as TwitterButton } from '../assets/twitter.svg'

import '../fonts/Coco-Sharp-Regular-trial.ttf'
import '../index.css'

const Nav = styled("nav")`
  height: 55px;
  background-color: #1b1e22;
  font-familiy: 'CocoSharp';
  ${p =>
    p.menuOpen &&
    `    background: #14191e;
  `};
  transition: 0.2s;
  display: flex;
  justify-content: center;
  padding: 20px 40px;
  position: relative;
  z-index: 10000;
  top: 0;

  .social-icons {
    position: absolute;
    right: 50px;
  }

  .social-icons * {
    margin-right: 15px;
  }

  .mobile-nav {
    ${mq.medium`
      display: none;
    `};
  }

  .hamburger {
    padding: 10px 0 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &:is-active {
      padding-top: 15px;
    }
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 1px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::after {
    content: "";
    display: none;
  }

  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse-r .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse-r .hamburger-inner::before {
    transition: all 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: all 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .hamburger--collapse-r.is-active .hamburger-inner,
  .hamburger--collapse-r.is-active .hamburger-inner::after,
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    background: #fff;
  }
`

const Links = styled("div")`
  display: none;
  align-items: center;
  a {
    padding: 10px;
    color: white;
    text-decoration: none;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .1rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  a:hover {
    color: #c3b0b0;
  }
  .social-icons {
    display: none;
  }
  ${mq.medium`
    display: flex;
  `};
  ${mq.large`
    .social-icons {
      display: block;
    }
  `}
`

const MobileLinks = styled("ul")`
  background: #14191e;
  font-familiy: 'CocoSharp';
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  padding: 0;
  margin: 0;
  transform: translateX(-100%);
  transition: 0.3s;
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;
  opacity: 0;
  ${p =>
    p.menuOpen &&
    `
    opacity: 1;
    transform: translateX(0);
  `}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
  }

  a {
    color: white;
    text-decoration: none;
  }
`

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Nav menuOpen={menuOpen}>
      <div className="mobile-nav">
        <button
          className={`hamburger hamburger--collapse-r ${
            menuOpen ? "is-active" : ""
          }`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      <Links menuOpen={menuOpen}>
        <Link to="home" spy={true} smooth={true}>HOME</Link>
        <Link to="beyond" spy={true} smooth={true}>BEYOND</Link>
        <Link to="mindmap" spy={true} smooth={true}>MINDMAP</Link>
        <Link to="bags" spy={true} smooth={true}>BAGS</Link>
        <Link to="teams" spy={true} smooth={true}>TEAMS</Link>
        <Link to="faq" spy={true} smooth={true}>FAQ</Link>
        <div className="social-icons">
          <OpenseaButton />
          <SmartButton />
          <TwitterButton />
        </div>
      </Links>

      <MobileLinks menuOpen={menuOpen}>
        <li>
          <Link to="home" spy={true} smooth={true} onClick={() => setMenuOpen(false)}>HOME</Link>
        </li>
        <li>
          <Link to="beyond" spy={true} smooth={true} onClick={() => setMenuOpen(false)}>BEYOND</Link>
        </li>
        <li>          
          <Link to="mindmap" spy={true} smooth={true} onClick={() => setMenuOpen(false)}>MINDMAP</Link>
        </li>
        <li>          
          <Link to="bags" spy={true} smooth={true} onClick={() => setMenuOpen(false)}>BAGS</Link>
        </li>
        <li>          
          <Link to="teams" spy={true} smooth={true} onClick={() => setMenuOpen(false)}>TEAMS</Link>
        </li>
        <li>          
          <Link to="/faq">FAQ</Link>
        </li>
      </MobileLinks>
    </Nav>
  )
}
