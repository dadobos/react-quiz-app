import React from 'react';

import { SelectWrapper } from '../App.style';

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

type Props = {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
};

const SelectDifficulty = ({ difficulty, setDifficulty }: Props) => {
  return (
    <SelectWrapper
      value={difficulty}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setDifficulty(e.target.value);
      }}
    >
      <option value={Difficulty.EASY}>Easy</option>
      <option value={Difficulty.MEDIUM}>Medium</option>
      <option value={Difficulty.HARD}>Hard</option>
    </SelectWrapper>
  );
};

export default SelectDifficulty;
