import { tag } from './projectsList';
import theme from '../theme/theme';
import dayjs, { Dayjs } from 'dayjs';

export interface blog {
  title: string;
  time: Dayjs;
  desc: string;
  pic: any;
  tags: tag[];
  href: string;
}

const blogList: blog[] = [
  {
    title: `Typescript vs JavaScript: What's the Difference?`,
    time: dayjs('2020-05-18'),
    desc: 'Whether it is necessary to switch to TS from JS?',
    pic: require('../static/TSvsJS.jpg'),
    tags: [
      { color: theme.$jsYellow as string, name: 'JavaScript' },
      { color: theme.$tsBlue as string, name: 'TypeScript' },
    ],
    href: '/blog/0',
  },
  {
    title: 'Hooks Overview',
    time: dayjs('2020-06-04'),
    desc: 'React Hook innovatively enhances functional components',
    pic: require('../static/Hook.png'),
    tags: [
      { color: theme.$jsYellow as string, name: 'JavaScript' },
      { color: theme.$reactBlue as string, name: 'React' },
    ],
    href: '/blog/1',
  },
  {
    title: 'Content Render',
    time: dayjs('2020-07-12'),
    desc: 'Things need to be considered when content being rendered',
    pic: require('../static/UXUI.png'),
    tags: [{ color: theme.$tsBlue as string, name: 'UI/UX' }],
    href: '/blog/2',
  },
  {
    title: 'Feasible Solutions to Layout',
    time: dayjs('2020-07-20'),
    desc:
      'Making layout be adaptive to all screen size is important and critical',
    pic: require('../static/LayoutSolution.jpg'),
    tags: [
      { color: theme.$reactBlue as string, name: 'CSS' },
      { color: theme.$tsBlue as string, name: 'UI/UX' },
    ],
    href: '/blog/3',
  },
];

export default blogList;
