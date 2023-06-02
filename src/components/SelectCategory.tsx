import React from 'react';

import { SelectWrapper } from '../App.style';
import { Category } from '../Types';

type Props = {
  category: number;
  categoryList: Array<Category>;
  setCategory: (category: number) => void;
};

const SelectCategory = ({ category, categoryList, setCategory }: Props) => {
  return (
    <SelectWrapper
      value={category}
      onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
        e.preventDefault();
        setCategory(e.target.value as number);
      }}
    >
      <option value={1}>Any Category</option>
      {categoryList.map((cat) => (
        <option value={cat.id} key={cat.id}>
          {cat.name}
        </option>
      ))}
    </SelectWrapper>
  );
};

export default SelectCategory;
