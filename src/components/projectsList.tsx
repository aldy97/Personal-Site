import theme from '../theme/theme';

export type tag = {
  color: string;
  name: string;
};

export interface project {
  title: string;
  link: string;
  intro: string;
  status: string;
  percent: number; //progress percentage
  tags: tag[];
}

const projectsList: project[] = [
  {
    title: 'ShangHai MDYL Website🏠',
    link: 'https://github.com/aldy97/MeiDi',
    intro: `Simulation of a website of a company located in Shanghai`,
    status: 'Missing materials to finish projects section...',
    percent: 70,
    tags: [
      { color: theme.$reactBlue as string, name: 'React' },
      { color: theme.$reactBlue as string, name: 'Redux' },
      { color: theme.$jsYellow as string, name: 'JavaScript' },
    ],
  },
  {
    title: 'My Account Book💰',
    link: 'https://github.com/aldy97/Account_Book',
    intro: 'An app that allows users to record their expense and income',
    status: 'Working on back-end in order to implement more functions',
    percent: 50,
    tags: [
      { color: theme.$reactBlue as string, name: 'React' },
      { color: theme.$tsBlue as string, name: 'TypeScript' },
      { color: theme.$nodeGreen as string, name: 'Node' },
      { color: theme.$expressGreen as string, name: 'Express' },
    ],
  },
  {
    title: 'iPhone 11 Customizer📱',
    link: 'https://github.com/aldy97/iphone-customizer',
    intro: 'Simulation of iPhone 11 configuration of Apple Canada',
    status:
      'Aiming to rewrite it with TypeScript and add more functions to it...',
    percent: 90,
    tags: [
      { color: theme.$reactBlue as string, name: 'React' },
      { color: theme.$reactBlue as string, name: 'Redux' },
      { color: theme.$jsYellow as string, name: 'JavaScript' },
    ],
  },
  {
    title: 'My Personal Website👤',
    link: 'https://github.com/aldy97/Personal-Site',
    intro: 'My personal website written in TypeScipt',
    status: 'Consistently updating my blog',
    percent: 100,
    tags: [
      { color: theme.$reactBlue as string, name: 'React' },
      { color: theme.$tsBlue as string, name: 'TypeScript' },
    ],
  },
  {
    title: 'TypeScript-Algorithm🤖️',
    link: 'https://github.com/aldy97/TypeScript-Algorithm',
    intro: 'Solving algorithm questions on Leetcode with TypeScript ',
    status: "Doing questions labeled easy and medium'",
    percent: 30,
    tags: [{ color: theme.$tsBlue as string, name: 'Algorithm' }],
  },
  {
    title: 'Covid-19 Canada🦠',
    link: 'https://github.com/aldy97/Covid-19-Canada',
    intro:
      'Visualization of Covid-19 situation in Canada, data from John Hopkins API',
    status: 'Allowing more API from different authorities',
    percent: 60,
    tags: [
      { color: theme.$tsBlue as string, name: 'TypeScript' },
      { color: theme.$reactBlue as string, name: 'React' },
    ],
  },
];

export default projectsList;
