import { createGlobalStyle } from "styled-components";
import styles from "./styles";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100vh;
    scroll-behavior: smooth;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    background-color: ${styles.colors.white};
    color: ${styles.colors.text.dark};
    font-family: ${styles.fonts.sans};
  }

  #root {
    min-height: 100vh;
  }

`;

export default GlobalStyle;
