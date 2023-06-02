export type Category = {
  id: number;
  name: string;
};

export type QuestionType = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = QuestionType & { answers: string[] };

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
