import { css } from "styled-components";
import styles from "./styles";

export const media = Object.keys(styles.breakpoints).reduce((acc, label) => {
  acc[label] = (...args: []) => css`
    @media (max-width: ${styles.breakpoints[label]}px) {
      ${
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore: An argument for 'first' was not provided.
        css(...args)
      }
    }
  `;
  return acc;
}, {});

export default media;
