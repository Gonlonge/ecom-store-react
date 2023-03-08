import { ThemeProvider } from "styled-components";

const ColorTheme = {
  colors: {
    primary: "#1a91da", // blue
    secondary: "#ffc107", // yellow
    success: "#2bcd36", // green
    danger: "#dc3545", // red
    textLight: "#ffffff", // white
    textDark: "#000000", // black
    tertiary: "#e6e6e6;", // gray shadows
    quaternary: "rgba(0, 0, 0, 0.16)", // dark Black shadows
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={ColorTheme}>{children}</ThemeProvider>
);

export default Theme;
