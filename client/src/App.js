import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Footer from './components/Footer/index';
import Articles from './pages/articles';
import Home from './pages/home/index';
import Article from './pages/article/index';
import Researches from './pages/researches/index';
import Research from './pages/research';
import PrevWork from './pages/prevWork/index';
import PrevWorks from './pages/prevWorks/index';


function App() {
  return (
    <>
    <Helmet>
      <title>test</title>
      <meta name='description' content='blablabla' />
    </Helmet>
    <Header/>
      <Switch>
        <Route path='/researches/:id/:slug/' component={Research} />
        <Route path='/researches/' component={Researches} />
        <Route path='/works/:id/:slug' component={PrevWork} />
        <Route path='/works/' component={PrevWorks} />
        <Route path='/articles/:id/:slug' component={Article} />
        <Route path='/articles' component={Articles} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
