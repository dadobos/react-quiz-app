import React from 'react';
import { ButtonWrapper } from '../App.style';
import { AnswerObject } from '../Types';
import { unEscape } from '../Utils';

type Props = {
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  question: string;
  userAnswers: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  userAnswers
}) => (
  <div className="question-card-wrapper">
    <p className="question">{unEscape(question)}</p>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          correct={userAnswers?.correctAnswer === answer}
          userClicked={userAnswers?.answer === answer}
          key={answer}
        >
          <button disabled={!!userAnswers} onClick={callback} value={answer}>
            <span>{unEscape(answer)}</span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </div>
);

export default QuestionCard;
