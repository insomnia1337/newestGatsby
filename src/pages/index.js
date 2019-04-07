import React from "react"
import styled, {createGlobalStyle} from "styled-components"
import Menu from '../components/menu'
import Main from "../components/main"
const GlobalStyle = createGlobalStyle`
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}

body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: #4a00fb; /* Old browsers */
  background: -moz-linear-gradient(45deg, #4a00fb 0%, #e600ff 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #4a00fb 0%,#e600ff 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #4a00fb 0%,#e600ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4a00fb', endColorstr='#e600ff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}



@media only screen and (min-width: 768px) {
  body {
    padding: 2em !important;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
  }
  #___gatsby {
       height: 100%;
  }
  div[role="group"][tabindex] {
    display: grid;
    grid-template-columns: 20% auto;
    height: 100%;
}
  
  img {
    display: none;
  }
}


*, *::before, *::after {
  box-sizing: border-box;
} 
`

const IndexPage = () => (
  <>
  <GlobalStyle/>
    <Menu/>
    <Main/>
  </>
)

export default IndexPage
