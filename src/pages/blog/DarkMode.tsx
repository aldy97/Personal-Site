import React from 'react';
import SubTitle from '../../components/SubTitle';
import BlogLayout from '../../components/blogLayout';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atom-one-dark.css';

const content = [
  <p>
    Why is it necessary to implement dark mode for your web app? The answer is
    obvious: for better user experince in dark circumstances, this is always the
    priority that UI/UX designers should always consider in the first place. I
    remember that how many times I have complained on WeChat for not having dark
    mode for a very long time. It is until recent it has finally equipped with
    dark mode.
  </p>,
  <p>
    As a front-end developer and UI/UX designer for this website, there are
    couple of questions that I need to take into cautious considerations:
    <ul>
      <li>What is the most convinient way to accomplish this function?</li>
      <li>What color scheme I should pick?</li>
      <li>Where I should place the button for the switch?</li>
    </ul>
  </p>,
  <SubTitle>Solution to Implmentation</SubTitle>,
  <p>
    After did a bit of search on Google, I found out styled-components has APIs
    called createGlobalStyle and ThemeProvider that allows us to inject dynamic
    CSS style.
  </p>,
  <div style={{ textAlign: 'left' }}>
    <Highlight className='typescript'>
      {`
    const initiateTheme = () => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme === null) {
      return true;
     } else return localTheme === 'dark' ? true : false;
    };

    const [dark, setDark] = useState(initiateTheme());

    const setMode = (mode: string) => {
      window.localStorage.setItem('theme', mode);
      setDark(!dark);
    };

    const toggleDark = (): any => {
      dark ? setMode('light') : setMode('dark');
    };

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      if (localTheme === 'dark') {
        setDark(true);
      } else {
        setDark(false);
      }
    }, [dark]);
    `}
    </Highlight>
  </div>,
  <p>
    The reason why the default state dark is this complicated is because if it
    is either dark/light, then users would see a blinking switch from a mode
    that he/she does not want to see to the one that is actually wanted. We for
    sure want to avoid that. With implementation of localStorage, we can let the
    website remember the selected mode even after another page is entered on
    this site. ToggleDark is a function that is used by the switch button.
  </p>,
  <SubTitle>Selection of Color Scheme</SubTitle>,
  <p>
    Choosing a proper color scheme is a very subtle work. Along with choosing
    colors that are suitable when they appear together, I also need to consider
    whether it is matching to the color scheme that I use for the light mode.
    Great thanks to Chuntong's{' '}
    <a href='https://chuntonggao.github.io/icolor/'>iColor</a>. After cautious
    consideration, I picked flat UI colors French.
  </p>,
  <div style={{ textAlign: 'left' }}>
    <Highlight className='HTML'>
      {`
       <div>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
         <GlobalStyles />
         <Header toogleDark={toggleDark} dark={dark} />
         {width < 1000 ? (
           <Switch
             onClick={toggleDark}
             defaultChecked={window.localStorage.getItem('theme') === 'dark'}
             style={{ marginTop: 10, marginLeft: 20 }}
             checkedChildren='🌛'
             unCheckedChildren='🌞'
           ></Switch>
         ) : (
           <div></div>
         )}
         <Footer />
       </ThemeProvider>
     </div>
      `}
    </Highlight>
  </div>,
  <p>
    ThemeProvider makes an implicit theme props for all components being wrapped
    within without actually declarations. This allows us to dynamically inject
    different types of colors into our components written with
    styled-components.
  </p>,
  <div style={{ textAlign: 'left' }}>
    <Highlight className='typescript'>
      {`
      const StyledBlogCard = styled(Card)<CardProps>\`
          width: \${(props) => \`\${props.width}px\`};
          border: 1px solid \${(props) => props.theme.$cardBorder};
          margin-left: auto;
          margin-right: auto;
          margin-top: \${(props) => props.theme.$marginSection};
          margin-bottom: \${(props) => props.theme.$marginSection};
          cursor: pointer;
          @media (max-width: 1000px) {
          width: 600px;
          }
          @media (max-width: 600px) {
          width: \${(props) => props.theme.$mobileWidth}px;
        }
      \`;
      `}
    </Highlight>
  </div>,
  <p>
    This is just one example of how dynamic CSS should be implemented. But the
    rest follows the same pattern as the one being shown above.
  </p>,
  <SubTitle>Switch Position</SubTitle>,
  <p>
    After the actually implementation of dark mode. This question has become
    easy and chill. My decision is: placing the switch to the left-most on PC
    end and right below the menu on mobile end. My reasoning is as follows:
    switching from light to dark or either other way around is not a frequent
    operation for most users. So we just need to make it obvious to users that
    this function exists, but it should not take a key position on the webpage.
  </p>,
  <SubTitle>At the End</SubTitle>,
  <p>
    It is not easy to accomplish the dark mode. And most of the work is very
    tedious. But trust me, it is definitely worth it! The improvement on uses'
    experience is prominent. I guess you would feel the same when you actually
    finish this and play around with it yourself!
  </p>,
];

const DarkMode: React.FC = () => {
  return <BlogLayout index={6} content={content} height={533}></BlogLayout>;
};

export default DarkMode;
