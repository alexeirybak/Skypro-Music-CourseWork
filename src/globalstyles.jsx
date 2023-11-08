import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('../public/fonts/StratosSkyeng.woff2') format('woff2'),
    url('../public/fonts/StratosSkyeng.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100vh;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
}

.wrapper {
  height:100vh;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
  }
  
  .container {
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
  }
  
`

export default GlobalStyle
