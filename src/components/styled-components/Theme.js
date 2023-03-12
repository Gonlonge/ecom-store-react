import { ThemeProvider } from "styled-components";

// primary: "linear-gradient(to right, #F4A460, #ffdb58)",
// gradient from sandy brown to yellow
// background: linear-gradient(to bottom, #9f8f72, #ffffff);
// background: linear-gradient(to bottom, #6b5d4d, #8c7a61, #ab9775, #c9b48a);
//  background: linear-gradient(to bottom, #f7d1c2, #f2b6a2, #eb9c85, #e38269);

const ColorTheme = {
  colors: {
    primary: "#1a91da", // blue
    secondary: "#ffc107", // yellow
    success: "#2bcd36", // green
    rating: "#f76e1f", // orange
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
