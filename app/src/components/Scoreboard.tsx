import {
  Grid,
  Input,
  Typography,
  Card,
  CardContent,
  IconButton,
  ButtonGroup,
} from "@mui/joy";
import Person from "@mui/icons-material/Person";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { useRecoilState } from "recoil";
import { playersAtom } from "../constants/recoil_state";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { generateSamplePlayer } from "../utils";

const Scoreboard = () => {
  const [players, setPlayers] = useRecoilState(playersAtom);
  const bestScore = Math.max(...players.map((p) => p.score));

  const handleNameChange = (index: number, newName: string) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index] = { ...updatedPlayers[index], name: newName };
      return updatedPlayers;
    });
  };

  const addPlayer = () => {
    setPlayers((prev) => [...prev, generateSamplePlayer(prev.length + 1)]);
  };

  const removePlayer = () => {
    setPlayers((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      // sx={{ flexWrap: "nowrap" }}
    >
      {players.map((player, index) => (
        <Grid xs={3} md={3} key={index} justifyContent="center">
          <Input
            placeholder={player.name}
            onChange={(e) => handleNameChange(index, e.target.value)}
            startDecorator={
              player.score === bestScore && player.score !== 0 ? (
                <MilitaryTechIcon />
              ) : (
                <Person />
              )
            }
            endDecorator={player.activeTurn && <>*</>}
            color={
              player.score === bestScore && player.score !== 0
                ? "warning"
                : "neutral"
            }
            sx={{ width: "auto", maxWidth: "15em", marginBottom: "1em" }}
          />
          <Card
            variant="soft"
            sx={{
              width: "13em",
              paddingY: "2em",
              backgroundImage: "linear-gradient(50deg, #0294e8, #3802e8)",
            }}
          >
            <CardContent>
              <Typography
                level="h1"
                textAlign="center"
                sx={{ color: player.score >= 0 ? "white" : "red" }}
              >
                ${player.score}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <ButtonGroup variant="soft">
        <IconButton
          disabled={players.length <= 1}
          onClick={() => {
            removePlayer();
          }}
        >
          <HighlightOffIcon />
        </IconButton>
        <IconButton
          disabled={players.length >= 3}
          onClick={() => {
            addPlayer();
          }}
        >
          <AddCircleIcon />
        </IconButton>
      </ButtonGroup>
    </Grid>
  );
};

export default Scoreboard;
