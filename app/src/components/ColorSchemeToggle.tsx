import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/joy/IconButton";

import { useColorScheme } from "@mui/joy/styles";

export default function ColorSchemeToggle() {
  const { mode, setMode: setJoyMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton></IconButton>;
  }
  return (
    <IconButton
      onClick={() => {
        setJoyMode(mode === "dark" ? "light" : "dark");
      }}
      sx={{ justifySelf: "flex-end", gridColumn: 3 }}
    >
      {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
