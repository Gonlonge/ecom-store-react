import { ThemeProvider } from "styled-components";

const ColorTheme = {
  colors: {
    primary: "#1a91da", // blue
    secondary: "#ffc107", // yellow
    success: "#28a745", // green
    danger: "#dc3545", // red
    text: "#ffffff", // white
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={ColorTheme}>{children}</ThemeProvider>
);

export default Theme;
