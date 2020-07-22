import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

const Options: string[] = ['JavaScript', 'TypeScipt', 'UI/UX', 'CSS', 'React'];

function handleChange(value: string) {
  console.log(value);
}

const Filter = () => {
  return (
    <Select
      style={{ width: 200, textAlign: 'center' }}
      onChange={handleChange}
      defaultValue='Choose category'
    >
      {Options.map((option) => {
        return <Option value={option}>{option}</Option>;
      })}
    </Select>
  );
};

export default Filter;
