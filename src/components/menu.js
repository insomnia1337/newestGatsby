import React, { useState } from "react"
import styled from "styled-components"
import hamburger from "../images/hamburger.svg"
import Nav from "../components/nav"

const Aside = styled.aside`
  color: #fff;
  display: grid;
  padding: 2em;
  grid-template-columns: auto 40px;

  img {
    width: 40px;
    cursor: pointer;
  }

  figure {
    margin: 0;

    figcaption {
      font-size: 1.3em;
      font-weight: bold;
    }
  }
  @media only screen and (min-width: 768px) {
    background: #dce1f6;
    grid-template-columns: auto;
    grid-template-rows: 35% auto;
    padding: 0;

    #avatar {
      border-radius: 50%;
      background: #fff;
      width: 50px;
      height: 50px;
      margin: 2em auto 1em auto;
    }

    figcaption {
      text-align: center;
      color: #000;
    }
  }
`
const Menu = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)
  return (
    <Aside>
      <figure>
        <div id="avatar">Avatar</div>
        <figcaption>Jan Kowalsky</figcaption>
      </figure>
      <img src={hamburger} onClick={toggleOpen} />
      <Nav open={open} />
    </Aside>
  )
}

export default Menu
