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
    time: dayjs('2020-07-18'),
    desc: 'Whether it is necessary to switch to TS from JS?',
    pic: require('../static/TSvsJS.jpg'),
    tags: [
      { color: theme.$jsYellow, name: 'JavaScript' },
      { color: theme.$tsBlue, name: 'TypeScript' },
    ],
    href: '/blog/0',
  },
  {
    title: 'Hooks Overview',
    time: dayjs('2020-06-04'),
    desc: 'React Hook has been very trending recently...',
    pic: require('../static/Hook.png'),
    tags: [
      { color: theme.$jsYellow, name: 'JavaScript' },
      { color: theme.$reactBlue, name: 'React' },
    ],
    href: '/blog/1',
  },
  {
    title: '5 Ways to Center Align in CSS',
    time: dayjs('2020-05-12'),
    desc: 'CSS is honestly tedious',
    pic: require('../static/CSS.jpg'),
    tags: [{ color: theme.$tsBlue, name: 'CSS' }],
    href: '/blog/CSS',
  },
];

export default blogList;
