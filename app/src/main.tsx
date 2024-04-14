import React from "react";
import ReactDOM from "react-dom/client";
import GamePage from "./pages/GamePage.tsx";
import { CssVarsProvider } from "@mui/joy";
import { RecoilRoot } from "recoil";
import "./index.css";
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider>
      <RecoilRoot>
        <Header />
        <GamePage />
      </RecoilRoot>
    </CssVarsProvider>
  </React.StrictMode>
);
