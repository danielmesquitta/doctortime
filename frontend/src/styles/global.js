import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import { breakpoints, colors } from './variables'

export default createGlobalStyle`
  /*Default*/
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    :focus{
      outline: 0;
    }
  }
  html, body, #root{
    height: 100%;
  }
  html{
    scroll-behavior: smooth;
    font-size: 62.5%; /*1rem === 10px*/

    /* @media screen and (max-width: ${breakpoints.large}) {
      font-size: 56.25%;
    }

    @media screen and (max-width: ${breakpoints.medium}) {
      font-size: 50%;
    }

    @media screen and (min-width: ${breakpoints.huge}) {
      font-size: 75%;
    } */
  }  
  body{
    background: linear-gradient(
    to bottom right,
    ${colors.mainDark},
    ${colors.mainLight}
  );
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button{
    font-family: 'Roboto', Arial, Helvetica, sans-serif; 
    font-size: 1.6rem;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
`
