import { Grid, Typography } from "@mui/joy";
import Person from "@mui/icons-material/Person";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { useRecoilValue } from "recoil";
import { playersAtom } from "../constants/recoil_state";

const Scoreboard = () => {
  const players = useRecoilValue(playersAtom);
  const bestScore = Math.max(...players.map((p) => p.score));

  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      {players.map((player, index) => (
        <Grid xs={3} md={3} key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
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
            >
              {player.name}
            </Typography>
            <Typography level="body-lg">{player.score}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Scoreboard;
