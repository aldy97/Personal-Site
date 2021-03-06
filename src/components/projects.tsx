import React, { useState } from 'react';
import { project } from './projectsList';
import styled from 'styled-components';
import Filter from './Filter';
import { Card, Tag, Progress } from 'antd';
import Fade from 'react-reveal/Fade';
import useFilter from '../hooks/useFilter';
import useInnerHeight from '../hooks/useInnerHeight';
import projectList from './projectsList';
import useInnerWidth from '../hooks/useInnerWidth';
import 'antd/dist/antd.css';

type CardProps = {
  width: number;
};

export const StyledCard = styled(Card)<CardProps>`
  color: ${(props) => props.theme.$cardText};
  margin-top: ${(props) => props.theme.$marginSection};
  margin-bottom: ${(props) => props.theme.$marginSection};
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => `${props.width}px`};
  background: ${(props) => props.theme.$cardTheme};
  border: 1px solid ${(props) => props.theme.$cardBorder};
  @media (max-width: 1000px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: ${(props) => props.theme.$mobileWidth}px;
  }
`;

export type ButtonProps = {
  show: boolean;
};
export const StyledButton = styled.div<ButtonProps>`
  width: 150px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  background: ${(props) => props.theme.$themeColor};
  display: ${(props) => (props.show === false ? 'none' : 'auto')};
  &: hover {
    background: #fff;
    color: ${(props) => props.theme.$themeColor};
    border: 1px solid ${(props) => props.theme.$themeColor};
  }
`;

type ProjectSProps = {
  width: number;
  proNum: number;
  showButton: boolean;
  showFilter: boolean;
};

const Projects = ({ width, proNum, showButton, showFilter }: ProjectSProps) => {
  const [categorySelected, setCategorySelected] = useState('All');

  const handleClick = (key: any) => {
    setCategorySelected(key.key);
  };

  const getHomeProjectList = (proNum: number): project[] => {
    let HomeProjectList: project[] = [];
    for (let i = 0; i <= proNum + 1; i++) {
      if (projectList.length !== 0) {
        HomeProjectList.push(projectList[projectList.length - 1 - i]);
      }
      proNum--;
    }
    return HomeProjectList;
  };

  const filteredList = useFilter('projects', categorySelected) as project[];

  const height = useInnerHeight();

  const innerWidth = useInnerWidth();

  const ratio = innerWidth >= 1000 ? 2.4 : 2.9;

  const minHeight = height - ratio * 60;

  const StyledProjects = styled.div`
    min-height: ${minHeight}px;
    .title {
      color: ${(props) => props.theme.$themeColor};
      font-size: ${(props) => props.theme.$titleSize};
      margin-bottom: 0;
      text-align: center;
    }
    .filter-wrapper {
      text-align: center;
    }
    .button {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 500px) {
      margin-bottom: 0px;
    }
  `;
  return (
    <StyledProjects>
      <Fade top>
        <div className='title' style={{ marginBottom: showFilter ? 20 : -20 }}>
          Projects
        </div>
      </Fade>
      {showFilter ? (
        <div className='filter-wrapper'>
          <Filter handleClick={handleClick} type='projects'></Filter>
        </div>
      ) : (
        <div></div>
      )}

      {(showFilter ? filteredList : getHomeProjectList(proNum)).map(
        (item, index: number) => {
          return (
            <Fade bottom>
              <StyledCard
                headStyle={{
                  color: 'rgb(0, 122, 204)',
                }}
                title={item.title}
                extra={<a href={item.link}>More</a>}
                width={width}
                key={index}
              >
                <p>{item.intro}</p>
                <p>{item.status}</p>
                <p>
                  <Progress percent={item.percent} />
                </p>
                <p>
                  {item.tags.map((tag, index: number) => {
                    return (
                      <Tag color={tag.color} key={index}>
                        {tag.name}
                      </Tag>
                    );
                  })}
                </p>
              </StyledCard>
            </Fade>
          );
        }
      )}
      <Fade top>
        <StyledButton
          className='button'
          show={showButton}
          onClick={() => {
            window.location.href = '/projects';
          }}
        >
          View all projects
        </StyledButton>
      </Fade>
    </StyledProjects>
  );
};

export default Projects;
