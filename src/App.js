import React from 'react';
import { Switch, Route } from 'react-router-dom'
import mainScroll from './components/mainScroll'
import Contact from './screens/contact/contact'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={mainScroll} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
