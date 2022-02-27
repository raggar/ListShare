const colors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#808080",
  dark: "#444444",
  text: {
    dark: "#444444",
    light: "#FFFFFF",
    secondary: "#808080",
    accent: "#000000",
  },
  background: "#F3F3F3",
};

const fonts = {
  heading: "Inter, system-ui, sans-serif",
  sans: "Inter, system-ui, sans-serif",
};

const spacing = {
  0: "0px",
  1: "8px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "48px",
  7: "56px",
  8: "64px",
  9: "72px",
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

interface IObjectKeys {
  [key: string]: number;
}

interface IBreakpoints extends IObjectKeys {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const breakpoints: IBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const borderRadius = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
};

const styles = {
  colors,
  fonts,
  fontSizes,
  breakpoints,
  spacing,
  borderRadius,
};

export default styles;
