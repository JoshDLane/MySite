import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainScroll from './components/mainScroll'
import ReactGA from 'react-ga';
import Poe from './pages/poe/poe'

function initializeReactGA() {
  ReactGA.initialize('UA-168001915-1');
  ReactGA.pageview('/homepage');
}

function App() {
  initializeReactGA()
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainScroll} />
        <Route path="/poe" component={Poe} />
      </Switch>
    </div>
  );
}

export default App;
