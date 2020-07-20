import React from 'react';
import Project from '../components/projects';
import projectList from '../components/projectsList';

const TotalProNum = projectList.length;
const ProjectsPage: React.FC = () => {
  return (
    <Project width={800} proNum={TotalProNum} showButton={false}></Project>
  );
};

export default ProjectsPage;
