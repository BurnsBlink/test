import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import Cladograms from '../containers/Cladograms';
import Bacteria from '../components/Bacteria';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/cladograms" component={Cladograms}/>
        <Route path="/cladograms/1/bacteria" component={Home}/>
      </Router>
    )
  }
}

export default App;
