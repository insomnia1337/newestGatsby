import React, { useState } from "react"
import styled from "styled-components"
import hamburger from "../images/hamburger.svg"
import Nav from "../components/nav"

const Aside = styled.aside`
  color: #fff;
  display: grid;
  grid-template-columns: auto 40px;
  padding: 2em;

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
      background: #DCE1F6;
        grid-template-columns: auto;
        grid-template-rows: 20% auto;
        padding: 0;
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
        <img src={hamburger} onClick={toggleOpen}></img>
        <Nav open={open} />
      </Aside>
  )
}

export default Menu
