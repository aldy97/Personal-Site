import React from 'react';
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
      <StyledCard
        title='ShangHai MDYL Website'
        extra={<a href='https://github.com/aldy97/MeiDi'>More</a>}
        style={{ width: 600 }}
      >
        <p>Simulation of a company's website located in Shanghai</p>
        <p>
          <strong>Current status:</strong> Missing materials to finish projects
          section...
        </p>
        <p>
          <Progress percent={70} />
        </p>
        <p>
          <Tag color={theme.$reactBlue}>React.js</Tag>
          <Tag color={theme.$reactBlue}>Redux</Tag>
          <Tag color={theme.$jsYellow}>JavaScript</Tag>
        </p>
      </StyledCard>
      <StyledCard
        title='My Account Book'
        extra={<a href='https://github.com/aldy97/Account_Book'>More</a>}
        style={{ width: 600 }}
      >
        <p>An app that allows users to record their expense and income</p>
        <p>
          <strong>Current status:</strong> Working on back-end in order to
          implement more functions...
        </p>
        <p>
          <Progress percent={50} />
        </p>
        <p>
          <Tag color={theme.$reactBlue}>React.js</Tag>
          <Tag color={theme.$tsBlue}>TypeScript</Tag>
          <Tag color={theme.$nodeGreen}>Node.js</Tag>
          <Tag color={theme.$expressGreen}>Express</Tag>
        </p>
      </StyledCard>
      <StyledCard
        title='iPhone 11 Customizer'
        extra={<a href='https://github.com/aldy97/iphone-customizer'>More</a>}
        style={{ width: 600 }}
      >
        <p>Simulation of iPhone 11 configuration of Apple Canada</p>
        <p>
          <strong>Current status:</strong> aiming to rewrite it with TypeScript
          and add more functions to it...
        </p>
        <p>
          <Progress percent={90} />
        </p>
        <p>
          <Tag color={theme.$reactBlue}>React.js</Tag>
          <Tag color={theme.$reactBlue}>Redux</Tag>
          <Tag color={theme.$jsYellow}>JavaScript</Tag>
          <Tag color={theme.$tsBlue}>TypeScript</Tag>
        </p>
      </StyledCard>
    </StyledProjects>
  );
};

export default Projects;
