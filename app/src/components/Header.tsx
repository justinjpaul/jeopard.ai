import React from "react";
import { Typography } from "@mui/joy";
import ColorSchemeToggle from "./ColorSchemeToggle";

const Header: React.FC = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "baseline",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <Typography
        level="h1"
        sx={{
          backgroundImage: "linear-gradient(180deg, #02e8d5, #3802e8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: "1rem",
          textAlign: "center",
          gridColumn: 2,
        }}
      >
        Jeopard.ai
      </Typography>
      <ColorSchemeToggle />
    </div>
  );
};

export default Header;
