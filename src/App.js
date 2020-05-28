import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainScroll from './components/mainScroll'
import ContactModal from './components/contactModal/contactModal';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainScroll} />
        {/* <Route path="/resume" component={Resume} /> */}
      </Switch>
    </div>
  );
}

export default App;
