import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import App from "./App.jsx";

const theme = {
  dark: {
    primary: "#000",
    text: "white",
  },
  light: {
    primary: "#fff",
    text: "black",
  },
  fontFamily: "Segoe UI",
};

export const GlobalStyle = createGlobalStyle`
    button {
      font-family: ${(props) => props.theme.fontFamily}
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
