import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainScroll from './components/mainScroll'
import Contact from './screens/contact/contact'
import ContactModal from './components/contactModal/contactModal';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainScroll} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
