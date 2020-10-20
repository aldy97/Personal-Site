import React, { useState, useEffect } from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import TSvsJS from './pages/blog/TSvsJS';
import ReactHooks from './pages/blog/ReactHooks';
import ResLay from './pages/blog/ResLay';
import DataRender from './pages/blog/DataRender';
import CustomHook from './pages/blog/CustomHook';
import HackInstead from './pages/blog/HackInstead';
import DarkMode from './pages/blog/DarkMode';
import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './theme/theme';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles } from './theme/GlobalStyles';
import { Switch } from 'antd';
import useInnerWidth from './hooks/useInnerWidth';
import 'antd/dist/antd.css';

function App() {
  const width = useInnerWidth();
  //To prevent shaking of the screen when page is directed
  const initiateTheme: () => boolean = () => {
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

  return (
    <div>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header toggleDark={toggleDark} dark={dark} />
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
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/blog' exact component={BlogPage}></Route>
          <Route path='/projects' exact component={ProjectsPage}></Route>
          <Route path='/blog/0' exact component={TSvsJS}></Route>
          <Route path='/blog/1' exact component={ReactHooks}></Route>
          <Route path='/blog/2' exact component={DataRender}></Route>
          <Route path='/blog/3' exact component={ResLay}></Route>
          <Route path='/blog/4' exact component={CustomHook}></Route>
          <Route path='/blog/5' exact component={HackInstead}></Route>
          <Route path='/blog/6' exact component={DarkMode}></Route>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
