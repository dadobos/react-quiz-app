import React from 'react';
import { Capitalize } from '../Utils';

type Props = {
  difficulty: string;
  category: string | undefined;
  questionNumber: number;
  totalQuestions: number;
  score: number;
  gameOver:boolean;
};

const DetailsCard: React.FC<Props> = ({
  difficulty,
  category,
  questionNumber,
  totalQuestions,
  score,
  gameOver
}) => {
  return (
    <div className="question-card-wrapper">
      <div className="details">
        <div>Difficulty: {Capitalize(difficulty)}</div>
        <div>
          Question: {!gameOver && questionNumber + 1+'\/'}{totalQuestions}
        </div>
        <div>Score: {score}</div>
        {category && (
          <div>
            Category: {category.replace(/Entertainment: |Science: /g, '')}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
