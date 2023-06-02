import React from 'react';
import { ButtonWrapper } from '../App.style';
import { AnswerObject } from '../Types';
import { Capitalize } from '../Utils';

type Props = {
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  difficulty: string;
  question: string;
  category: string;
  questionNr: number;
  score: number;
  totalQuestions: number;
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  difficulty,
  question,
  category,
  questionNr,
  score,
  totalQuestions,
  userAnswer
}) => (
  <div className="question-card-wrapper">
    <div className="details">
      <div>Difficulty: {Capitalize(difficulty)}</div>
      <div>{category}</div>
    </div>
    <div className="details">
      <div>
        Question: {questionNr}/{totalQuestions}
      </div>
      <div>Score: {score}</div>
    </div>

    {!(questionNr === totalQuestions) && (
      <>
        <p
          className="question"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <div>
          {answers.map((answer) => (
            <ButtonWrapper
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
              key={answer}
            >
              <button disabled={!!userAnswer} onClick={callback} value={answer}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          ))}
        </div>
      </>
    )}
  </div>
);

export default QuestionCard;
