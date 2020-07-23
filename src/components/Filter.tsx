import React from 'react';
import blogList from './blogList';
import projectsList from './projectsList';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

//Generates all non-duplicate category options from blogList/projectList
const getOptions: (list: string[][]) => string[] = (list: string[][]) => {
  let options: string[] = ['All'];
  for (let i in list) {
    for (let j in list[i]) {
      if (!options.includes(list[i][j])) {
        options.push(list[i][j]);
      }
    }
  }
  return options;
};

type FilterProps = {
  handleChange: (value: string) => void;
  type: string;
};
const Filter = ({ handleChange, type }: FilterProps) => {
  //generates a 2-D array that contains duplicated tags from blogList
  const unprocessedBlogListOptions = blogList.map((blog) =>
    blog.tags.map((tag) => tag.name)
  );

  //generates a 2-D array that contains duplicated tags from projectList
  const unprocessedProjectsListOptions = projectsList.map((project) =>
    project.tags.map((tag) => tag.name)
  );

  const options =
    type === 'blog'
      ? getOptions(unprocessedBlogListOptions)
      : getOptions(unprocessedProjectsListOptions);

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
