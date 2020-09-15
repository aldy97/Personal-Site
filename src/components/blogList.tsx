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
    tags: [{ color: theme.$reactBlue as string, name: 'React' }],
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
    tags: [{ color: theme.$tsBlue as string, name: 'UI/UX' }],
    href: '/blog/3',
  },
  {
    title: 'My Practice on Custom Hook',
    time: dayjs('2020-07-24'),
    desc: 'How I use custome hook to improve UI performance on mobile end',
    pic: require('../static/customHook.jpeg'),
    tags: [
      { color: theme.$reactBlue as string, name: 'React' },
      { color: theme.$reactBlue as string, name: 'CSS' },
      { color: theme.$tsBlue as string, name: 'TypeScript' },
      { color: theme.$tsBlue as string, name: 'UI/UX' },
    ],
    href: '/blog/4',
  },
  {
    title: 'My First Hackathon!',
    time: dayjs('2020-08-07'),
    desc: 'Participating in hackathon for the first time ever in my life',
    pic: require('../static/HackInstead.jpg'),
    tags: [
      { color: theme.$reactBlue as string, name: 'React' },
      { color: theme.$tsBlue as string, name: 'TypeScript' },
    ],
    href: '/blog/5',
  },
  {
    title: 'How I Implemented Dark Mode',
    time: dayjs('2020-08-15'),
    desc: 'Dark mode now has become a must for web and apps',
    pic: require('../static/dark-mode.jpeg'),
    tags: [
      { color: theme.$tsBlue as string, name: 'UI/UX' },
      { color: theme.$reactBlue as string, name: 'CSS' },
    ],
    href: '/blog/6',
  },
];

export default blogList;
