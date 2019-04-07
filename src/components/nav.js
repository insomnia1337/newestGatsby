import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const UL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: ${props => props.open ? "block" : "none"}
`;


const NavLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: .8em;
    display: block;
    padding: 1.5em 3em;
    background-color: rgba(255,255,255,.35);
    color: #000;
`;




const Nav = ({open}) => {
return (
  <nav>
    <UL open={open} className="active">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">About me</NavLink>
      </li>
      <li>
        <NavLink to="/">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </UL>
  </nav>
)
}

export default Nav
