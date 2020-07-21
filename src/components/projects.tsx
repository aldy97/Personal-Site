import React from 'react';
import projectsList from './projectsList';
import styled from 'styled-components';
import theme from '../theme/theme';
import { Card, Tag, Progress } from 'antd';
import Fade from 'react-reveal/Fade';
import 'antd/dist/antd.css';

export const StyledProjects = styled.div`
  .title {
    color: ${theme.$themeColor};
    font-size: ${theme.$titleSize};
    text-align: center;
    margin-bottom: -20px;
  }
  .button {
    margin-left: auto;
    margin-right: auto;
  }
`;

type CardProps = {
  width: number;
};

export const StyledCard = styled(Card)<CardProps>`
  margin-top: ${theme.$marginSection};
  margin-bottom: ${theme.$marginSection};
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => `${props.width}px`};
  @media (max-width: 500px) {
    width: ${theme.$mobileWidth}px;
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
  background: ${theme.$themeColor};
  display: ${(props) => (props.show === false ? 'none' : 'auto')};
  &: hover {
    background: #fff;
    color: ${theme.$themeColor};
    border: 1px solid ${theme.$themeColor};
  }
`;

type ProjectSProps = {
  width: number;
  proNum: number;
  showButton: boolean;
};
const Projects = ({ width, proNum, showButton }: ProjectSProps) => {
  return (
    <StyledProjects>
      <Fade top>
        <div className='title'>Projects</div>
      </Fade>
      {projectsList
        .reverse()
        .slice(0, proNum)
        .map((item, index: number) => {
          return (
            <Fade bottom>
              <StyledCard
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
        })}
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
