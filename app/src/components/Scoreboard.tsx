import { Grid, Input, Typography, Card, CardContent, CardCover } from "@mui/joy";
import Person from "@mui/icons-material/Person";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { useRecoilState } from "recoil";
import { playersAtom } from "../constants/recoil_state";

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
            <Input
              value={player.name}
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
                width: "13em", paddingY: "2em", backgroundImage: "linear-gradient(50deg, #0294e8, #3802e8)"
              }}
            >
              <CardContent>
                <Typography level="h1" textAlign="center" sx={{ color: player.score >= 0 ? "white" : "red" }}>
                  ${player.score}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      ))
      }
    </Grid >
  );
};

export default Scoreboard;
