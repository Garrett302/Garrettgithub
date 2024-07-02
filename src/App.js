import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Register from './components/Register';
import { Tab1, Tab2, Tab3, Tab4, Tab5 } from './components/Tab1';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Tab1} />
          <Route path="/tab1" component={Tab1} />
          <Route path="/tab2" component={Tab2} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/tab4" component={Tab4} />
          <Route path="/tab5" component={Tab5} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
