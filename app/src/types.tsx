export interface Player {
  name: string;
  score: number;
  activeTurn?: boolean;
}

export interface Question {
  question: string;
  answer: string;
  accessed?: boolean;
}

export interface Category {
  category: string;
  questions: Question[];
}
