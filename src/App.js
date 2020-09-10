import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MainScroll from './components/mainScroll'
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-168001915-1');
  ReactGA.pageview('/homepage');
}

function App() {
  initializeReactGA()
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" component={MainScroll} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
