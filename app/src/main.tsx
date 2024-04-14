import React from "react";
import ReactDOM from "react-dom/client";
import GamePage from "./pages/GamePage.tsx";
import { CssVarsProvider, Sheet, extendTheme } from "@mui/joy";
import { RecoilRoot } from "recoil";
import "./index.css";
import Header from "./components/Header.tsx";

declare module "@mui/joy/styles" {
  interface Palette {
    gradient: {
      primary: string;
    };
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        gradient: {
          primary:
            "linear-gradient(to top, var(--joy-palette-primary-main), #000)",
        },
      },
    },
    dark: {
      palette: {
        gradient: {
          primary:
            "linear-gradient(to top, var(--joy-palette-primary-main), #000)",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <RecoilRoot>
        <Sheet
          sx={{ paddingLeft: "10px", paddingRight: "10px", margin: "none" }}
        >
          <Header />
          <GamePage />
        </Sheet>
      </RecoilRoot>
    </CssVarsProvider>
  </React.StrictMode>
);
