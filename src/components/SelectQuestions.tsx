import React from 'react';
import { SelectWrapper } from '../App.style';

export enum TotalQuestions {
  FIVE = 5,
  TEN = 10,
  FIFTEEN = 15,
  TWENTY = 20,
  TWENTYFIVE = 25,
  FIFTY = 50
}

type Props = {
  totalQuestionNumber: number;
  setTotalQuestionNumber: (totalQuestionNumber: number) => void;
};

const SelectQuestions = ({
  totalQuestionNumber,
  setTotalQuestionNumber
}: Props) => {
  return (
    <SelectWrapper
      value={totalQuestionNumber}
      onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
        e.preventDefault();
        setTotalQuestionNumber(e.target.value as number);
      }}
    >
      <option value={TotalQuestions.FIVE}>{TotalQuestions.FIVE}</option>
      <option value={TotalQuestions.TEN}>{TotalQuestions.TEN}</option>
      <option value={TotalQuestions.FIFTEEN}>{TotalQuestions.FIFTEEN}</option>
      <option value={TotalQuestions.TWENTY}>{TotalQuestions.TWENTY}</option>
      <option value={TotalQuestions.TWENTYFIVE}>
        {TotalQuestions.TWENTYFIVE}
      </option>
      <option value={TotalQuestions.FIFTY}>{TotalQuestions.FIFTY}</option>
    </SelectWrapper>
  );
};

export default SelectQuestions;
