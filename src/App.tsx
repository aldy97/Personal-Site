import React, { useState, useEffect } from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import TSvsJS from './pages/blog/TSvsJS';
import ReactHooks from './pages/blog/ReactHooks';
import ResLay from './pages/blog/ResLay';
import { BrowserRouter, Route } from 'react-router-dom';
import DataRender from './pages/blog/DataRender';

function App() {
  //  when filter applied on blog/projects page,
  //       number of items is not fixed.
  //       when we only have one project Or post being shown,
  //       footer position needs to be absolute in mobile-end,
  //       thus it is not floating
  const [isAbsolute, setIsAbsolute] = useState(true);
  useEffect(() => {
    console.log(isAbsolute);
  });

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/blog' exact component={BlogPage}></Route>
        <Route path='/projects' exact component={ProjectsPage}></Route>
        <Route path='/blog/0' exact component={TSvsJS}></Route>
        <Route path='/blog/1' exact component={ReactHooks}></Route>
        <Route path='/blog/2' exact component={DataRender}></Route>
        <Route path='/blog/3' exact component={ResLay}></Route>
      </BrowserRouter>
      <Footer Absolute={isAbsolute} />
    </div>
  );
}

export default App;
