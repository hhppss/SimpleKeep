import { createGlobalStyle } from 'styled-components'

import Rubik from 'assets/fonts/Rubik/Rubik-Medium.ttf'
import { normalize } from './normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    src:
      url('${Rubik}') format('ttf')
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  * { 
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
  .active {
    background-color: #feefc3;
  }
`
