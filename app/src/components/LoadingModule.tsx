import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
// @ts-ignore
import useSound from "use-sound";
import song from "../assets/jeopardy.mp3";
import { Sheet, Typography } from "@mui/joy";

function LoadingModule() {
  const [play, { stop }] = useSound(song, {
    volume: 0.5,
    loop: true,
    autoplay: true,
    onError: () => {
      console.error("Error loading music track");
    },
  });

  const jokes = [
    "do do do do do do do do do do do do",
    "What do you call a computer superhero? A screen saver!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "How do you make an egg-roll? You push it!",
    "Did you hear the rumor about butter? Well, I'm not going to go spreading it!",
  ];
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  useEffect(() => {
    return () => {
      play({ id: "loading-audio", soundEnabled: false });
    };
  }, [play]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      stop({ id: "loading-audio" });
    };
  }, [stop]);

  return (
    <Sheet>
      <CircularProgress />
      <Typography>{jokes[currentJokeIndex]}</Typography>
    </Sheet>
  );
}

export default LoadingModule;
