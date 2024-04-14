import React from "react";
import ReactDOM from "react-dom/client";
import GamePage from "./pages/GamePage.tsx";
import { CssVarsProvider } from "@mui/joy";
import { RecoilRoot } from "recoil";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider>
      <RecoilRoot>
        <GamePage />
      </RecoilRoot>
    </CssVarsProvider>
  </React.StrictMode>
);
