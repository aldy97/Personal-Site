import React from 'react';
import projectsList, { Project, tag } from './projectsList';
import styled from 'styled-components';
import theme from '../theme/theme';
import { Card } from 'antd';
import { Tag } from 'antd';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const StyledProjects = styled.div`
  .title {
    color: ${theme.$themeColor};
    font-size: ${theme.$titleSize};
    text-align: center;
  }
`;

const StyledCard = styled(Card)`
  margin-top: ${theme.$marginSection};
  margin-bottom: ${theme.$marginSection};
  margin-left: auto;
  margin-right: auto;
`;

const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <div className='title'>Projects</div>
      {projectsList.map((item: Project, index: number) => {
        return (
          <StyledCard
            title={item.title}
            extra={<a href={item.link}>More</a>}
            style={{ width: 600 }}
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
        );
      })}
    </StyledProjects>
  );
};

export default Projects;
