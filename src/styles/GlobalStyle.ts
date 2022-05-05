import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-warning: #C70000;
    --color-success: #03AC00;
  }
  body {
    background: #8C11BE;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export default GlobalStyle