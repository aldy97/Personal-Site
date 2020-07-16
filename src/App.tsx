import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
