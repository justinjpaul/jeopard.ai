import React from "react";
import { Typography } from "@mui/joy";

const Header: React.FC = () => {
  return (
    <Typography
      level="h1"
      sx={{
        backgroundImage: "linear-gradient(180deg, #02e8d5, #3802e8)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        marginBottom: "1rem",
        textAlign: "center",
      }}
    >
      Jeopard.ai
    </Typography>
  );
};

export default Header;
