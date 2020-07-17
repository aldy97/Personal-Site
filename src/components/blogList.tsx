import { tag } from './projectsList';
import theme from '../theme/theme';

export interface blog {
  title: string;
  desc: string;
  link: string;
  pic: any;
  tags: tag[];
}

const blogList: blog[] = [
  {
    title: `Typescript vs JavaScript: What's the Difference?`,
    desc: 'Whether it is necessary to switch to TS from JS?',
    link: 'https://www.guru99.com/typescript-vs-javascript.html',
    pic: require('../static/TSvsJS.jpg'),
    tags: [
      { color: theme.$jsYellow, name: 'JavaScript' },
      { color: theme.$tsBlue, name: 'TypeScript' },
    ],
  },
  {
    title: 'Hooks Overview',
    desc: 'React Hook has been very trending recently...',
    link: 'https://zh-hans.reactjs.org/docs/hooks-overview.html',
    pic: require('../static/Hook.png'),
    tags: [
      { color: theme.$jsYellow, name: 'JavaScript' },
      { color: theme.$reactBlue, name: 'React' },
    ],
  },
  {
    title: '5 Ways to Center Align in CSS',
    desc: 'CSS is honestly tedious',
    link: 'https://cgao.info/5-ways-to-center-align-in-css',
    pic: require('../static/alignDIv.webp'),
    tags: [{ color: theme.$tsBlue, name: 'CSS' }],
  },
];

export default blogList;
