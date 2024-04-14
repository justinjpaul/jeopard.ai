import { Button, Typography, Select, Option, Input, Sheet } from "@mui/joy";
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { useRecoilState } from "recoil";
import { playersAtom } from "../constants/recoil_state";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ClearIcon from "@mui/icons-material/Clear";
import { fetchHelper } from "../utils";
import LoadingModule from "./LoadingModule";

interface QuestionModalProps {
  question: string;
  answer: string;
  points: number;
  // setAllowModalClose: Dispatch<SetStateAction<boolean>>;
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  answer,
  points,
  // setAllowModalClose,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // fix later to find player with activeturn
  const [response, setResponse] = useState<string>("placeholder answer");
  const [players, setPlayers] = useRecoilState(playersAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const CorrectOutput = () => {
    return (
      <Typography startDecorator={<CheckBoxIcon />} color="success">
        You got it right!
      </Typography>
    );
  };

  const IncorrectOutput = () => {
    return (
      <Typography startDecorator={<ClearIcon />} color="danger">
        {question}
      </Typography>
    );
  };

  useEffect(() => {
    if (isCorrect !== undefined) {
      setPlayers((prev) => {
        let modifiable = prev.map((player, ind) => {
          if (ind === selectedIndex) {
            return {
              ...player,
              score: player.score + (isCorrect ? 1 : -1) * points,
              activeTurn: isCorrect,
            };
          } else if (isCorrect) {
            return {
              ...player,
              activeTurn: false,
            };
          }
          return player;
        });
        return modifiable;
      });
      setIsLoading(false);
      // setAllowModalClose(true);
    }
  }, [isCorrect]);

  const handlePersonChange = (
    _: React.SyntheticEvent | null,
    newValue: number | null
  ) => {
    if (newValue !== null) {
      setSelectedIndex(newValue);
    } else {
      console.log("null index error");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(event.target.value);
  };

  const handler = (hadError: boolean, jsonData: any) => {
    if (hadError || !("accepted" in jsonData)) {
      setResponse("placeholder answer");
      setIsLoading(false);
      return;
    }

    setIsCorrect(jsonData.accepted);
  };

  return (
    <Sheet>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsLoading(true);
          const respJSON = fetchHelper(
            "/api/contest",
            "post",
            undefined,
            {
              correct: question,
              user: response,
            },
            handler
          );
          console.log(respJSON);
        }}
      >
        <Typography level="h2">{answer}</Typography>
        <br />
        <Stack spacing={1}>
          <Input
            required
            placeholder="what is your question?"
            onChange={handleInputChange}
            disabled={isLoading || isCorrect !== undefined}
          ></Input>
          <Stack
            direction="row"
            sx={{ justifyContent: "flex-end" }}
            spacing={1}
          >
            <Select
              sx={{ maxWidth: "15em" }}
              defaultValue={selectedIndex}
              onChange={handlePersonChange}
              disabled={isLoading || isCorrect !== undefined}
            >
              {players.map((p, ind) => (
                <Option key={ind} value={ind} label={p.name}>
                  {p.name}
                </Option>
              ))}
            </Select>
            <Button
              disabled={isLoading || isCorrect !== undefined}
              type="submit"
              sx={{ maxWidth: "10em" }}
            >
              Confirm
            </Button>
          </Stack>
        </Stack>
      </form>
      {isLoading ? (
        <LoadingModule />
      ) : isCorrect ? (
        isCorrect !== undefined && <CorrectOutput />
      ) : (
        isCorrect !== undefined && <IncorrectOutput />
      )}
    </Sheet>
  );
};

export default QuestionModal;
