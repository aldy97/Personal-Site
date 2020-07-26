import React from 'react';
import blogList from './blogList';
import projectsList from './projectsList';
import { Menu, Dropdown } from 'antd';
import styled from 'styled-components';
import theme from '../theme/theme';
import 'antd/dist/antd.css';

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

const StyledA = styled.a`
  display: block;
  color: ${theme.$themeColor};
  border: 2px solid #eee;
  border-radius: 6px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
`;

type FilterProps = {
  handleClick: (key: any) => void;
  type: string;
};
const Filter = ({ handleClick, type }: FilterProps) => {
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

  const menu = (
    <Menu onClick={handleClick}>
      {options.map((option) => {
        return <Menu.Item key={option}>{option}</Menu.Item>;
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <StyledA
        className='ant-dropdown-link'
        onClick={(e) => e.preventDefault()}
      >
        Filter by Category
      </StyledA>
    </Dropdown>
  );
};

export default Filter;
