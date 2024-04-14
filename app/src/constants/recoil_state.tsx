import { atom } from "recoil";
import { Category, Player } from "../types"; // Assuming your types file is named 'types.ts' or similar
import { addAccessedField, generateSamplePlayers } from "../utils";
import sampleData, { samplePlayers } from "./sampleData";

export const playerAtom = atom<Player>({
  key: "playerAtom",
  default: {
    name: "",
    score: 0,
    activeTurn: false,
  },
});

export const playersAtom = atom<Player[]>({
  key: "playersAtom",
  default: generateSamplePlayers(3), // fix this
});

export const gameboardAtom = atom<Category[]>({
  key: "gameboardAtom",
  default: addAccessedField(sampleData),
});
