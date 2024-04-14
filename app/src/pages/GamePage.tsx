import { Chip, Divider } from "@mui/joy";
import Jeopardy from "../components/Jeopardy";
import Scoreboard from "../components/Scoreboard";
import { useState } from "react";
import StartGameModal from "../components/StartGameModal";

export default function GamePage() {
  const [startModalOpen, setStartModalOpen] = useState(true);

  const onClose = () => {
    setStartModalOpen(false);
  };
  return (
    <>
      <StartGameModal open={startModalOpen} onClose={onClose} />
      <Jeopardy></Jeopardy>
      <Divider>
        <Chip variant="soft" color="neutral" size="md" sx={{ margin: "2em" }}>
          Scoreboard
        </Chip>
      </Divider>
      <div className="score" style={{ width: "75%", margin: "auto" }}>
        <Scoreboard></Scoreboard>
      </div>
    </>
  );
}
