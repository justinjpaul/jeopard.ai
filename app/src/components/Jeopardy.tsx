import sampleData from "../constants/sampleData";
import { Stack, Grid, ModalDialog, ModalClose } from "@mui/joy";
import CategoryCard from "./CategoryCard";
import QuestionCard from "./QuestionCard";
import { useState } from "react";
import QuestionModal from "./QuestionModal";

import { Modal } from "@mui/joy";
import { gameboardAtom } from "../constants/recoil_state";
import { useRecoilState } from "recoil";

export interface QA {
  question: string;
  answer: string;
  points: number;
  response?: string;
}

const Jeopardy = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [allowModalClose, setAllowModalClose] = useState<boolean>(false);
  const [selectedQA, setSelectedQA] = useState<QA>({
    question: "placeholder question",
    answer: "placeholder answer",
    points: 0,
  });
  const [gameboard, setGameboard] = useRecoilState(gameboardAtom);

  const onClick = (cat_ind: number, qa_ind: number, qa: QA) => {
    setSelectedQA(qa);
    setGameboard((prev) => {
      return prev.map((cat, ci) => {
        if (ci === cat_ind) {
          return {
            ...cat,
            questions: cat.questions.map((qs, qi) =>
              qi === qa_ind
                ? { question: qs.question, answer: qs.answer, accessed: true }
                : qs
            ),
          };
        } else {
          return cat;
        }
      });
    });
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        spacing={2}
        sx={{ flexGrow: 1 }}
      >
        {gameboard.map((cat, ind) => (
          <Grid xs={2} sm={2} md={2} key={`cat-${cat}-${ind}`}>
            <CategoryCard category={cat.category}></CategoryCard>
          </Grid>
        ))}
        {gameboard.map((cat, cat_ind) => (
          <Grid xs={2} sm={2} md={2} key={`qcat-${cat}-${cat_ind}`}>
            <Stack spacing={1}>
              {cat.questions?.map((qa, ind) => (
                <QuestionCard
                  key={`qcard-${cat}-${ind}`}
                  value={ind * 200 + 200}
                  accessed={qa.accessed ? qa.accessed : false}
                  onClick={() => {
                    if (!qa.accessed) {
                      onClick(cat_ind, ind, { ...qa, points: ind * 200 + 200 });
                    }
                  }}
                ></QuestionCard>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          if (allowModalClose) {
            setOpen(false);
            setAllowModalClose(false);
          }
        }} // so can't click out of modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ModalDialog layout="center">
          <QuestionModal
            points={selectedQA.points}
            question={selectedQA.question}
            answer={selectedQA.answer}
            setAllowModalClose={setAllowModalClose}
          ></QuestionModal>
          {allowModalClose && <ModalClose />}
        </ModalDialog>
      </Modal>
    </>
  );
};
export default Jeopardy;
