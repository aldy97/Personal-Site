import React from 'react';
import Project from '../components/projects';
import projectList from '../components/projectsList';
import theme from '../theme/theme';

const TotalProNum = projectList.length;
const ProjectsPage: React.FC = () => {
  return (
    <Project
      width={theme.$blogWidth as number}
      proNum={TotalProNum}
      showButton={false}
      showFilter={false}
    ></Project>
  );
};

export default ProjectsPage;
