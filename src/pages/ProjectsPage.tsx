import React from 'react';
import Project from '../components/projects';
import projectList from '../components/projectsList';
import theme from '../theme/theme';
import { PageWrapper } from './BlogPage';

const TotalProNum = projectList.length;
const ProjectsPage: React.FC = () => {
  return (
    <PageWrapper>
      <Project
        width={theme.$blogWidth as number}
        proNum={TotalProNum}
        showButton={false}
        showFilter={true}
      ></Project>
    </PageWrapper>
  );
};

export default ProjectsPage;
