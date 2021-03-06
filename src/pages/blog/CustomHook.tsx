import React from 'react';
import SubTitle from '../../components/SubTitle';
import BlogLayout from '../../components/blogLayout';
import ImgHolder from '../../components/ImgHolder';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atom-one-dark.css';

const content = [
  <p>
    I have been using hooks for a while, but the usage has always been limited
    to simple built-in hooks like useState and useEffect. That's pretty much it.
    It is until I start to build my personal website with TypeScript, I realize
    that I should use custom hooks to reduce repetitive code. I am not saying
    that repetitive code is terribily bad, but it truly makes things ugly and
    harder for me to keep up with maintainability of this site.
  </p>,
  <SubTitle>"Listening" to browser's height</SubTitle>,
  <p>
    On my <a href='/projects'>projects overview page</a>, there is a filter that
    allows filtering projects based on their categories. If user clicks on a
    category which only has one project that has it. Then the total height of
    the page will be smaller than the inner height of browser. And this
    situation looks like this:
  </p>,
  <ImgHolder
    src='https://media3.giphy.com/media/cOi20YhImEVOw8Ys4W/giphy.gif'
    width={200}
    height={400}
    mobileHeight={700}
  ></ImgHolder>,
  <p>
    The footer seems to have an oddly big height, but its actually floating due
    to shortness of the whole page. You would instantly come up with a solution:
    set a min-height for the projects section in the middle. That's exactly what
    I thought in the first place, soon after that three problems pops up on my
    brain:
  </p>,
  <p>
    <ol>
      <li>
        Since users' device height vary from one to the other, so I have to
        query browser's inner height.
      </li>
      <li>
        If users view this site on PC, then they are able to change their
        browsers' inner height.
      </li>
      <li>
        If the user has a giant screen, then the same problem would also appear
        on <a href='/blog'>my blog page</a> when there is one post being shown.
      </li>
    </ol>
  </p>,
  <p>
    Ummm, it looks like I need to let both projects and blog section keep an eye
    on browser's inner height not only at the first time is mounted, but
    throughout the whole time. So basically,{' '}
    <strong>
      min-height is dynamic as browser inner height changes, which should be
      encapsulated as a utility function that can be used by more than one
      component.
    </strong>
  </p>,
  <SubTitle>My Solution to this issue</SubTitle>,
  <p>You probably have got to know what my solution is: custom hook.</p>,
  <div style={{ textAlign: 'left' }}>
    <Highlight className='typescript'>
      {`
  import { useState, useEffect } from 'react';

  //Listener for current innerHeight of browser.
  function useInnerHeight() {
    const [height, setHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleResize = () => {
        setHeight(window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
    }, [height]);
  
    return height;
  }
  
  export default useInnerHeight;
  `}
    </Highlight>
  </div>,
  <p>
    If you have little knowledge in{' '}
    <a href='https://zh-hans.reactjs.org/docs/hooks-overview.html'>
      basic React hook usage
    </a>
    , you should take like 5 minutes to get to know about it. I have also
    written one blog <a href='/blog/1'>Hook Overview</a> about why React Hooks
    are worth using . Briefly, this custom hook keeps track on browser's inner
    height and update it to components that use it once browser inner height
    changes.
  </p>,
  <p>
    The last step is implementation of the custom hook in my blog and projects
    components:
  </p>,
  <div style={{ textAlign: 'left' }}>
    <Highlight className='typescript'>{`
  const height = useInnerHeight();

  const minHeight = height - 2.3 * 60;

  const StyledBlog = styled.div\`
    min-height: \${minHeight}px;
    .title {
      color: \${theme.$themeColor};
      font-size: \${theme.$titleSize};
      margin-bottom: 0;
      text-align: center;
    }
    .filter-wrapper {
      text-align: center;
    }
    .button {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 500px) {
      margin-bottom: 0px;
    }
  \`;
`}</Highlight>
  </div>,
  <p>
    Great thanks to{' '}
    <a href='https://styled-components.com/'>styled-components</a>,
    implementation of dynamic CSS has become super easy and chill. Now, let us
    see how it look like now:
  </p>,
  <ImgHolder
    src='https://media0.giphy.com/media/TjS2J5AoOpSuWgKY7y/giphy.gif'
    width={200}
    height={400}
    mobileHeight={700}
  ></ImgHolder>,
  <p>
    Yayy! It works! Now the project page is able to set min-height according to
    browser inner height when it is first mounted, but also changes min-height
    as long as browser inner height changes. The implementation of
    useInnerHeight in blog component is similar to the one above. If I do not
    use custom Hook, I would have copy and paste code to blog component, which
    is low in maintainability and mistake-prone.
  </p>,
  <p>
    Hopefully this blog gives you a little taste of Custom Hooks. This is just a
    simple implementation, obviously Custom Hooks are powerful tools that can
    greatly save your time if you are able to build it in a general and robust
    way.
  </p>,
];

const CustomHook: React.FC = () => {
  return <BlogLayout index={4} content={content} height={400}></BlogLayout>;
};

export default CustomHook;
