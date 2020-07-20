import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import Blog from './pages/BlogPage';
import TSvsJS from './pages/blog/TSvsJS';
import ReactHooks from './pages/blog/ReactHooks';
import { BrowserRouter, Route } from 'react-router-dom';
import DataRender from './pages/blog/DataRender';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/blog' exact component={Blog}></Route>
        <Route path='/blog/0' exact component={TSvsJS}></Route>
        <Route path='/blog/1' exact component={ReactHooks}></Route>
        <Route path='/blog/2' exact component={DataRender}></Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
