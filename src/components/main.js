import React from "react"
import styled from "styled-components"
import sea from '../images/sea.svg'
const Layout = styled.main`
  background-color: #fff;
  padding: 1em 1.4em;

  h1 {
    margin: 0;
  }

  p {
    font-size: 1.1em;
    line-height: 1.6em;
  }

  @media only screen and (min-width: 768px) {
    padding: 4em;
    background: white url(${sea}) no-repeat bottom right;
  }
`;

const PortfolioButton = styled.button`
  display: block;
  color: #fff;
  background: #0e7fff;
  padding: 8px 50px;
  text-decoration: none;
  font-size: 1.2em;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  margin: 2em 0;
  border: 0;
  width: 100%;
`
const Main = () => {
  return (
    <Layout>
      <h1>I'm a UI/UX Developer</h1>
      <p>
        You design this thing and then make it a reality in the browser, oh
        yeah… Imagine the possibilites of your new skill
      </p>
      <PortfolioButton>my portfolio</PortfolioButton>
    </Layout>
  )
}

export default Main
