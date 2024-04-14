import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
// @ts-ignore
import useSound from "use-sound";
import song from "../assets/jeopardy.mp3";
import { Sheet } from "@mui/joy";

function LoadingModule() {
  const [isLoading, setIsLoading] = useState(true);
  const [play] = useSound(song, {
    volume: 0.5,
    loop: true,
    autoplay: true,
    onload: () => setIsLoading(false),
    onError: () => {
      console.error("Error loading music track");
      setIsLoading(false);
    },
  });

  useEffect(() => {
    return () => {
      play({ id: "loading-audio", soundEnabled: false });
    };
  }, [play]);

  return (
    <Sheet>
      <CircularProgress />
      <p>Loading...</p>
    </Sheet>
  );
}

export default LoadingModule;
