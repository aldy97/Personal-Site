import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

type FilterProps = {
  handleChange: any;
  options: string[];
};
const Filter = ({ handleChange, options }: FilterProps) => {
  return (
    <Select
      style={{ width: 200, textAlign: 'center' }}
      onChange={handleChange}
      defaultValue='Filter By Category'
    >
      {options.map((option) => {
        return <Option value={option}>{option}</Option>;
      })}
    </Select>
  );
};

export default Filter;
