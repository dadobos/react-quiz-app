import React from 'react';

import { SelectWrapper } from '../App.style';
import { Category } from '../Types';

type Props = {
  categoryID: number;
  categoryList: Array<Category>;
  setCategoryID: (categoryID: number) => void;
};

const SelectCategory = ({ categoryID, categoryList, setCategoryID }: Props) => {
  return (
    <SelectWrapper
      value={categoryID}
      onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
        e.preventDefault();
        setCategoryID(e.target.value as number);
      }}
    >
      <option value={1}>Random Category</option>
      {categoryList.map((category) => (
        <option value={category.id} key={category.id}>
          {category.name.replace(/Entertainment: |Science: /g, '')}
        </option>
      ))}
    </SelectWrapper>
  );
};

export default SelectCategory;
