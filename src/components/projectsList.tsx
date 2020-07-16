import theme from '../theme/theme';

export interface Project {
  title: string;
  link: string;
  intro: string;
  status: string;
  percent: number;
  tags: tag[];
}

export type tag = {
  color: string;
  name: string;
};

const projectsList: Project[] = [
  {
    title: 'ShangHai MDYL Website',
    link: 'https://github.com/aldy97/MeiDi',
    intro: `Simulation of a website of a company located in Shanghai`,
    status: 'Missing materials to finish projects section...',
    percent: 70,
    tags: [
      { color: theme.$reactBlue, name: 'React' },
      { color: theme.$reactBlue, name: 'Redux' },
      { color: theme.$jsYellow, name: 'JavaScript' },
    ],
  },
  {
    title: 'My Account Book',
    link: 'https://github.com/aldy97/Account_Book',
    intro: 'An app that allows users to record their expense and income',
    status: 'Working on back-end in order to implement more functions...',
    percent: 50,
    tags: [
      { color: theme.$reactBlue, name: 'React' },
      { color: theme.$tsBlue, name: 'TypeScript' },
      { color: theme.$nodeGreen, name: 'Node' },
      { color: theme.$expressGreen, name: 'Express' },
    ],
  },
  {
    title: 'iPhone 11 Customizer',
    link: 'https://github.com/aldy97/iphone-customizer',
    intro: 'Simulation of iPhone 11 configuration of Apple Canada',
    status:
      'Aiming to rewrite it with TypeScript and add more functions to it...',
    percent: 90,
    tags: [
      { color: theme.$reactBlue, name: 'React' },
      { color: theme.$reactBlue, name: 'Redux' },
      { color: theme.$jsYellow, name: 'JavaScript' },
      { color: theme.$tsBlue, name: 'TypeScript' },
    ],
  },
];

export default projectsList;
