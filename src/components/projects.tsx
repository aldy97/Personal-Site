import React from 'react';
import projectsList, { Project, tag } from './projectsList';
import styled from 'styled-components';
import theme from '../theme/theme';
import { Card, Tag, Progress } from 'antd';
import 'antd/dist/antd.css';
import { Animated } from 'react-animated-css';

export const StyledProjects = styled.div`
  .title {
    color: ${theme.$themeColor};
    font-size: ${theme.$titleSize};
    text-align: center;
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
    width: 350px;
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
      <Animated
        animationIn='fadeInDown'
        animationInDuration={1500}
        animationOut='fadeIn'
        isVisible={true}
      >
        <div className='title'>Projects</div>
      </Animated>
      {projectsList.slice(0, proNum).map((item: Project, index: number) => {
        return (
          <Animated
            animationIn='fadeInUp'
            animationInDuration={1500}
            animationOut='fadeIn'
            isVisible={true}
          >
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
                {item.tags.map((tag: tag, index: number) => {
                  return (
                    <Tag color={tag.color} key={index}>
                      {tag.name}
                    </Tag>
                  );
                })}
              </p>
            </StyledCard>
          </Animated>
        );
      })}
      <StyledButton
        className='button'
        show={showButton}
        onClick={() => {
          window.location.href = '/projects';
        }}
      >
        View all projects
      </StyledButton>
    </StyledProjects>
  );
};

export default Projects;
